jest.mock('../src/models/venta', () => ({
  Venta: {
    create: jest.fn()
  }
}));

const { Venta } = require('../src/models/venta');
const { createSale, normalizeSalePayload } = require('../src/services/salesService');

const payload = {
  items: [
    { itemType: 'PRODUCT', quantity: 2, unitPrice: 10, total: 999 },
    { itemType: 'PRODUCT', quantity: 3, unitPrice: 5, total: 999 }
  ],
  payment: { method: 'CASH' },
  subtotal: 999,
  taxes: 5,
  total: 1,
  status: 'PENDING'
};

describe('salesService', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should calculate sale totals from items and ignore client totals', async () => {
    Venta.create.mockImplementation(async (sale) => sale);

    const sale = await createSale(payload);

    expect(sale.items.map((item) => item.total)).toEqual([20, 15]);
    expect(sale.subtotal).toBe(35);
    expect(sale.taxes).toBe(5);
    expect(sale.total).toBe(40);
    expect(sale.status).toBe('PENDING');
  });

  it.each(['CASH', 'CARD', 'TRANSFER', 'OTHER'])('should preserve payment method %s', async (method) => {
    const sale = normalizeSalePayload({ ...payload, payment: { method } });
    expect(sale.payment.method).toBe(method);
  });

  it.each(['PENDING', 'COMPLETED', 'CANCELLED'])('should preserve valid status %s', (status) => {
    expect(normalizeSalePayload({ ...payload, status }).status).toBe(status);
  });

  it('should default status to COMPLETED when status is omitted', () => {
    expect(normalizeSalePayload({ ...payload, status: undefined }).status).toBe('COMPLETED');
  });
});