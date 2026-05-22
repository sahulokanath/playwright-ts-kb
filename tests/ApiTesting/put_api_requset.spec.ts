import { test, expect } from '@playwright/test';
import fs from 'fs';

// Utility
function readJson(filepath: string) {
  return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}

test('Verify the PUT request', async ({ request }) => {

  const requestBody = readJson('testdata/put_request.json');

  // 🔹 Step 1: Create booking
  const createResponse = await request.post('/booking', {
    data: requestBody
  });

  expect(createResponse.ok()).toBeTruthy();

  const responseBody = await createResponse.json();
  const bookingId = responseBody.bookingid;

  console.log('Booking ID:', bookingId);

  // 🔹 Step 2: Generate token
  const tokenRequestBody = readJson('testdata/token_request_body.json');

  const tokenResponse = await request.post('/auth', {
    data: tokenRequestBody
  });

  expect(tokenResponse.ok()).toBeTruthy();

  const tokenResponseBody = await tokenResponse.json();
  const token = tokenResponseBody.token;

  console.log('Token:', token);

  // 🔹 Step 3: Update booking (PUT)
  const updateResponse = await request.put(`/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${token}`
    },
    data: requestBody
  });

  expect(updateResponse.ok()).toBeTruthy();

  const updatedData = await updateResponse.json();
  console.log('Updated Booking:', updatedData);
});