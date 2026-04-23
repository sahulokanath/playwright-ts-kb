import { test, expect } from '@playwright/test';

test('GET API Test', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');
  expect(response.status()).toBe(200);
  const users = await response.json();
  expect(Array.isArray(users)).toBeTruthy();
});