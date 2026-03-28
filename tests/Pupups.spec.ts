import { test, expect } from "@playwright/test";

test('Verify Popups', async ({ page, context }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Wait for popup + click together
    const [popupPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('#PopUp').click()
    ]);

    // Wait for popup load
    await popupPage.waitForLoadState();

    const pages = context.pages();
    console.log("Total Pages:", pages.length);

    console.log(pages[0].url())
    console.log(pages[1].url())
   // console.log(pages[2].url())
    await page.waitForTimeout(5000);

});