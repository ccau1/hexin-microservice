import request from 'supertest';
import app from '../src/server';

describe('GET /health - check health of server', function(): void {
  it(
    "GET /health - should return 200 with \"healthy\"",
    async (done): Promise<void> => {
      const result = await request(app).get("/health");
      expect(result.text).toEqual("healthy");
      expect(result.status).toEqual(200);
      done();
    });
});