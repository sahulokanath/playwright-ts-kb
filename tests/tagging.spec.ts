import { test, expect, Locator } from "@playwright/test";


test('Verify The Tagging1', { tag: '@sanity' }, async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle('Google');
})

test('Verify The Tagging2', { tag: '@regression' }, async ({ page }) => {
   await page.goto("https://www.google.com/");
   await page.getByRole('link', { name: 'Privacy' }).click();
})

test('Verify The Tagging3', { tag: ['@sanity' ,'@regression']}, async ({ page }) => {
   await page.goto("https://www.google.com/");
   await page.getByRole('link', { name: 'Privacy' }).click();
})
