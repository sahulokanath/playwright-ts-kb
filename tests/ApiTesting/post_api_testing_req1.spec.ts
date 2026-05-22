import { test, expect } from '@playwright/test';

test('Create the POST request', async ({ request }) => {

    const requestBody = {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01"
        },
        additionalneeds: "Breakfast"
    };

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
    console.log(booking);
});