import { test, expect } from '@playwright/test';
import { permission } from 'node:process';


test.skip('Handle camera permission', async ({ browser }) => {

    const context = await browser.newContext(
        {
            permissions: ['camera', 'microphone']
        }
    );

    const page = await context.newPage();

    await page.goto('https://play.realbridge.online/camera.html');

    await page.locator('text=Start test').click();

    await page.waitForTimeout(6000)

});



test('Verify the Login flow', async ({ page }) => {

    //open the web page
    await page.goto('https://www.amazon.in/');

    const serchbox = page.getByPlaceholder('Search Amazon.in');
    await serchbox.fill('iphone');
    await page.locator('[aria-label="iphone 16 pro 256+gb"]').click();

    const text= page.getByText('"iphone 16 pro 256gb"')

    await expect(text).toBeVisible();


    await page.waitForTimeout(5000);
})