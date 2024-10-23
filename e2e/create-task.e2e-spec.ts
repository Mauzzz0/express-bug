import request from 'supertest';
import { bootstrap, port } from '../src/bootstrap.server';

describe('Task Creating', () => {
  const host = `http://localhost:${port}`;

  beforeAll(() => bootstrap());

  it('Should response created task', () => {
    const body = {
      name: 'test',
      description: 'test',
    };

    return request(host)
      .post('/task')
      .send(body)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual(expect.objectContaining(body));
      });
  });

  it('Id increasing should works correctly', async () => {
    const task1 = { name: 'test-1', description: 'test-1' };
    const task2 = { name: 'test-2', description: 'test-2' };

    const response1 = await request(host).post('/task').send(task1);
    const response2 = await request(host).post('/task').send(task2);

    expect(response2.body.id).toBeGreaterThan(response1.body.id);
  });

  it('Should validate request body', async () => {
    const task1 = { name: 1 };
    const task2 = { description: 1 };
    const task3 = {};

    await request(host).post('/task').send(task1).expect(500);
    await request(host).post('/task').send(task2).expect(500);
    await request(host).post('/task').send(task3).expect(500);
  });
});
