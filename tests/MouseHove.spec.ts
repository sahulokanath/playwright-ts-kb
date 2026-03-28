import { test, Locator, expect } from "@playwright/test";



test.skip('Verify Mouse Hove', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const pointme = page.locator(".dropbtn");

    await pointme.hover();

    const laptop = page.locator(".dropdown-content a:nth-child(2)");
    laptop.hover();
    await page.waitForTimeout(5000);

})

test.skip('Verify Right Click', async ({ page }) => {

    await page.goto("https://vinothqaacademy.com/mouse-event/")
    const button = page.locator("#rightBtn");
    await button.click({ button: 'right' });// this will perform the right click 
    await page.waitForTimeout(5000);
})

test('Verify Double Click', async ({ page }) => {
    await page.goto("https://vinothqaacademy.com/mouse-event/")
    const button = page.locator("#doubleBtn");
    await button.dblclick();

    const status = (await page.locator("#doubleStatus").allInnerTexts()).map(text => text.trim());
    console.log(status)
    await expect(status).toContain("Double Click Detected ✅");
    await page.waitForTimeout(5000);
})