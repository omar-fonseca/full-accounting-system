process.env.NODE_ENV = 'test';

jest.mock('../src/models/venta', () => {
  const actual = jest.requireActual('../src/models/venta');
  return {
    ...actual,
    Venta: { create: jest.fn(), find: jest.fn(), findById: jest.fn() }
  };
});

jest.mock('../src/models/usuario', () => {
  const actual = jest.requireActual('../src/models/usuario');
  return {
    ...actual,
    Usuario: { findById: jest.fn() }
  };
});

const jwt = require('jsonwebtoken');
const request = require('supertest');
const { app } = require('../src/app');
const { Venta } = require('../src/models/venta');
const { Usuario } = require('../src/models/usuario');

const users = {
  ADMIN: 'user-admin',
  PROPIETARIO: 'user-owner',
  OPERARIO: 'user-operator',
  CLIENTE: 'user-client'
};

const tokenFor = (role) => jwt.sign({ userId: users[role], role }, process.env.JWT_SECRET);

const validPayload = {
  items: [{ itemType: 'PRODUCT', quantity: 2, unitPrice: 10, total: 999 }],
  payment: { method: 'CASH' },
  subtotal: 999,
  taxes: 5,
  total: 1,
  status: 'COMPLETED'
};

beforeAll(() => {
  Usuario.findById.mockImplementation((userId) => ({
    select: jest.fn().mockResolvedValue({ _id: userId, role: Object.keys(users).find((role) => users[role] === userId), estado: 'ACTIVE' })
  }));
});

beforeEach(() => {
  jest.clearAllMocks();
  Venta.create.mockImplementation(async (sale) => ({ _id: 'sale-1', ...sale }));
  Venta.find.mockReturnValue({ sort: jest.fn().mockResolvedValue([]) });
  Venta.findById.mockResolvedValue(null);
});

describe('Sales HTTP API', () => {
  it('should reject unauthenticated requests', async () => {
    await request(app).get('/sales').expect(401);
  });

  it.each(['ADMIN', 'PROPIETARIO', 'OPERARIO'])('should allow GET /sales for %s', async (role) => {
    await request(app).get('/sales').set('Authorization', `Bearer ${tokenFor(role)}`).expect(200);
  });

  it('should reject a role without Sales authorization', async () => {
    await request(app).get('/sales').set('Authorization', `Bearer ${tokenFor('CLIENTE')}`).expect(403);
  });

  it('should create a sale and recalculate all totals', async () => {
    const response = await request(app).post('/sales').set('Authorization', `Bearer ${tokenFor('OPERARIO')}`).send(validPayload).expect(201);

    expect(response.body).toMatchObject({ success: true, data: { sale: { subtotal: 20, taxes: 5, total: 25 } } });
    expect(response.body.data.sale.items[0].total).toBe(20);
    expect(Venta.create).toHaveBeenCalledTimes(1);
  });

  it.each([
    ['empty items', { ...validPayload, items: [] }],
    ['invalid quantity', { ...validPayload, items: [{ ...validPayload.items[0], quantity: 0 }] }],
    ['negative price', { ...validPayload, items: [{ ...validPayload.items[0], unitPrice: -1 }] }],
    ['invalid item type', { ...validPayload, items: [{ ...validPayload.items[0], itemType: 'SERVICE' }] }],
    ['invalid payment', { ...validPayload, payment: { method: 'BITCOIN' } }],
    ['invalid status', { ...validPayload, status: 'REFUNDED' }]
  ])('should return HTTP 400 for %s', async (_caseName, body) => {
    await request(app).post('/sales').set('Authorization', `Bearer ${tokenFor('ADMIN')}`).send(body).expect(400);
    expect(Venta.create).not.toHaveBeenCalled();
  });

  it('should return a sale by id', async () => {
    Venta.findById.mockResolvedValue({ _id: 'sale-1', total: 25 });
    const response = await request(app).get('/sales/sale-1').set('Authorization', `Bearer ${tokenFor('ADMIN')}`).expect(200);
    expect(response.body.data.sale).toMatchObject({ _id: 'sale-1', total: 25 });
  });

  it('should return 404 when a sale does not exist', async () => {
    await request(app).get('/sales/missing').set('Authorization', `Bearer ${tokenFor('ADMIN')}`).expect(404);
  });

  it('should pass supported filters to the service query', async () => {
    const sort = jest.fn().mockResolvedValue([]);
    Venta.find.mockReturnValue({ sort });
    await request(app).get('/sales?date=2026-09-03&employee=507f1f77bcf86cd799439011&shift=507f1f77bcf86cd799439012&payment=CASH').set('Authorization', `Bearer ${tokenFor('ADMIN')}`).expect(200);
    const query = Venta.find.mock.calls[0][0];
    expect(query['payment.method']).toBe('CASH');
    expect(query.employee).toBe('507f1f77bcf86cd799439011');
    expect(query.shift).toBe('507f1f77bcf86cd799439012');
    expect(query.soldAt).toBeDefined();
  });

  it('should reject an invalid date filter with HTTP 400', async () => {
    await request(app).get('/sales?date=not-a-date').set('Authorization', `Bearer ${tokenFor('ADMIN')}`).expect(400);
  });
});