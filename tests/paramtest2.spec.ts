
import { test, expect } from "@playwright/test";

// ✅ Test Data (Clean & Correct)
const loginData = [
    { email: "laura.taylor1234@example.com", password: "test123", expected: "success" },
    { email: "invalid@example", password: "@text12", expected: "error" },
    { email: "validuser@example.com", password: "3232", expected: "error" },
    { email: "", password: "", expected: "error" }
];

test.describe('Login Data Driven Tests', () => {

    // ✅ Run before each test
    test.beforeEach(async ({ page }) => {
        await page.goto("https://demowebshop.tricentis.com/login");
    });

    // ✅ Loop through test data
    for (const data of loginData) {

        test(`Login with Email: ${data.email} | Password: ${data.password}`, async ({ page }) => {

            // 🔹 Enter login details
            await page.locator("#Email").fill(data.email);
            await page.locator("#Password").fill(data.password);
            await page.locator('input.button-1.login-button').click();

            // 🔹 Validation
            if (data.expected === "success") {

                await expect(page.getByRole('link', { name: 'Log out' }))
                    .toBeVisible();

            } else {

                await expect(page.getByText(
                    'Login was unsuccessful. Please correct the errors and try again.',
                    { exact: true }
                )).toBeVisible();

                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
            }

        });

    }

});