import { test, expect } from '@playwright/test';

test('API returns AI response for valid message', async ({ request }) => {
  test.setTimeout(150000);
  
  const response = await request.post('http://localhost:3000/api/chat', {
    data: { message: 'What is QA testing?' },
    timeout: 140000
  });

  expect(response.ok()).toBeTruthy();
  
  const body = await response.json();
  expect(body.reply).toBeTruthy();
  expect(body.reply.length).toBeGreaterThan(10);
});

test('API returns valid JSON structure', async ({ request }) => {
  test.setTimeout(150000);
  
  const response = await request.post('http://localhost:3000/api/chat', {
    data: { message: 'Hello' },
    timeout: 140000
  });

  const body = await response.json();
  expect(body).toHaveProperty('reply');
});

test('API response time is reasonable', async ({ request }) => {
  test.setTimeout(150000);
  
  const startTime = Date.now();
  
  await request.post('http://localhost:3000/api/chat', {
    data: { message: 'Hi' },
    timeout: 140000
  });

  const duration = Date.now() - startTime;
  
  // Realistic expectation for local CPU model
  expect(duration).toBeLessThan(140000);
});