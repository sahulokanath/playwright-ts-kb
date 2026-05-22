import { test, expect } from '@playwright/test';

test('Get Request using the Id path-parameter', async ({ request }) => {

    const bookingid = 1;

    const response = await request.get(`/booking/${bookingid}`);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});


test.only('Get Request using name - query parameter', async ({ request }) => {

    const firstname = "Jim";
    const lastname = "Brown";

    const response = await request.get("/booking", {
        params: {
            firstname,
            lastname
        }
    });

    const responseBody: any = await response.json();

    console.log(responseBody);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    expect(responseBody.length).toBeGreaterThan(0);

    for (const data of responseBody) {
        expect(data).toHaveProperty('bookingid');
        expect(typeof data.bookingid).toBe("number");
        expect(data.bookingid).toBeGreaterThan(0);
    }
});