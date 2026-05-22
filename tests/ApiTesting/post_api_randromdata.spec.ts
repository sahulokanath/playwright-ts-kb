import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';

test('Create POST request with faker', async ({ request }) => {

    const requestBody = {
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        totalprice: faker.number.int({ min: 100, max: 5000 }),
        depositpaid: faker.datatype.boolean(),
        bookingdates: {
            checkin: DateTime.now().toFormat("yyyy-MM-dd"),
            checkout: DateTime.now().plus({ days: 5 }).toFormat("yyyy-MM-dd")
        },
        additionalneeds: "Breakfast"
    };

    const response = await request.post(
        'https://restful-booker.herokuapp.com/booking',
        { data: requestBody }
    );

    console.log("STATUS:", response.status());
    console.log("BODY:", await response.text());

    const responseBody = await response.json();

    expect(response.status()).toBe(200);

    expect(responseBody.booking.firstname).toBe(requestBody.firstname);
    expect(responseBody.booking.lastname).toBe(requestBody.lastname);

});