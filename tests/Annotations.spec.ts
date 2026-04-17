import { test, Locator, expect } from "@playwright/test";
/*
Types OF Annotations:-
only
skip
fail
fixme
slow

*/



test('Test1', async ({ page }) => {

    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle("Google");
})



test.skip('Test2', async ({ page }) => {

    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle("Google");
})



test('Test3', async ({ page, browserName }) => {

    test.skip(browserName == 'firefox', 'If the Browser Is Firefox skip');
    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle("Google");
})


test.fail('Test4', async ({ page }) => {

    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle("Google");
})


// If the Test is not completed we will make the fixme under develement time we will be make fixme
test.fixme('Test5', async ({ page }) => {

    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle("Google");
})

test('Test6', async ({ page }) => {

    test.slow()
    await page.goto("https://www.google.com/");

    await expect(page).toHaveTitle("Google");
})
