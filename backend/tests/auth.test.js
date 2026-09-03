const request = require('supertest');
const { app } = require('../src/app');

describe('Auth API', () => {
  it('should return 400 for invalid login payload', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'not-an-email', password: '' });

    expect(response.status).toBe(400);
  });

  it('should return 401 for protected route without token', async () => {
    const response = await request(app)
      .get('/auth/me');

    expect(response.status).toBe(401);
  });
});
