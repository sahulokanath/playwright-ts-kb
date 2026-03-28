import { test, expect, Locator } from "@playwright/test";

test('Verify the scroll bar', async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/");

    const ele = page.getByText('Blogger');

    await expect(ele).toBeVisible();


})