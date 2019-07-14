import request from 'supertest';
import app from '../../src/server';

describe('GET / - a simple api endpoint', function(): void {
  it("GET / should return 200", async (done): Promise<void> => {
    const result = await request(app).get("/");
    expect(result.status).toEqual(200);
    done();
  });
});