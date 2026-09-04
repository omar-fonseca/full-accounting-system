const { Venta } = require('../src/models/venta');

const validSale = (overrides = {}) => new Venta({
  items: [{ itemType: 'PRODUCT', quantity: 2, unitPrice: 10, total: 20 }],
  payment: { method: 'CASH' },
  subtotal: 20,
  taxes: 5,
  total: 25,
  status: 'COMPLETED',
  ...overrides
});

describe('Venta schema', () => {
  it('should accept a valid sale', async () => {
    await expect(validSale().validate()).resolves.toBeUndefined();
  });

  it.each([
    ['empty items', { items: [] }],
    ['zero quantity', { items: [{ itemType: 'PRODUCT', quantity: 0, unitPrice: 10, total: 0 }] }],
    ['negative quantity', { items: [{ itemType: 'PRODUCT', quantity: -1, unitPrice: 10, total: -10 }] }],
    ['negative unit price', { items: [{ itemType: 'PRODUCT', quantity: 1, unitPrice: -1, total: 0 }] }],
    ['invalid item type', { items: [{ itemType: 'SERVICE', quantity: 1, unitPrice: 10, total: 10 }] }],
    ['invalid payment method', { payment: { method: 'BITCOIN' } }],
    ['empty payment method', { payment: { method: '' } }],
    ['null payment method', { payment: { method: null } }],
    ['invalid status', { status: 'REFUNDED' }],
    ['empty status', { status: '' }],
    ['null status', { status: null }],
    ['inconsistent item total', { items: [{ itemType: 'PRODUCT', quantity: 2, unitPrice: 10, total: 19 }] }],
    ['inconsistent subtotal', { subtotal: 19, total: 24 }],
    ['inconsistent total', { total: 26 }]
  ])('should reject %s', async (_caseName, overrides) => {
    await expect(validSale(overrides).validate()).rejects.toMatchObject({ name: 'ValidationError' });
  });

  it.each(['CASH', 'CARD', 'TRANSFER', 'OTHER'])('should accept payment method %s', async (method) => {
    await expect(validSale({ payment: { method } }).validate()).resolves.toBeUndefined();
  });

  it.each(['PENDING', 'COMPLETED', 'CANCELLED'])('should accept status %s', async (status) => {
    await expect(validSale({ status }).validate()).resolves.toBeUndefined();
  });
});