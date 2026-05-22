import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Create the POST request Json File', async ({ request }) => {

    const jsonfilepath = "/home/lokanath/TSDEMOs/playwright-ts-kb/tests/testdata/post_reques.json";

    const requestBody = JSON.parse(fs.readFileSync(jsonfilepath, 'utf-8'))

    // Send POST request
    const response = await request.post('/booking', {
        data: requestBody
    });

    // Parse JSON response
    const responseBody = await response.json();

    // ✅ Status validation
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    // ✅ Response validation
    expect(responseBody).toHaveProperty("bookingid");
    expect(responseBody).toHaveProperty("booking");

    // Validate nested data
    expect(responseBody.booking).toHaveProperty("firstname", "Jim");
    expect(responseBody.booking).toHaveProperty("additionalneeds", "Breakfast");

    // Extract booking
    const booking = responseBody.booking;

    expect(booking).toMatchObject({

        firstname: requestBody.firstname,
        lastname: requestBody.lastname,
        totalprice: requestBody.totalprice,
        depositpaid: requestBody.depositpaid,
        additionalneeds: requestBody.additionalneeds
    })

    //validate dates this nested json

    expect(booking.bookingdates).toMatchObject({
        checkin: requestBody.bookingdates.checkin,
        checkout: requestBody.bookingdates.checkout
    })
    console.log(booking);
});