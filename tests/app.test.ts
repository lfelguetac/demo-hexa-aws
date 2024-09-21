import request from 'supertest';
import express from 'express';

const app = express();
app.get('/hello', (req, res) => {
  res.status(200).send('Hello, world!');
});

describe('GET /hello', () => {
  it('should return 200 OK with "Hello, world!"', async () => {
	const response = await request(app).get('/hello');
	expect(response.status).toBe(200);
	expect(response.text).toBe('Hello, world!');
  });
});