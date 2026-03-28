import { test, Locator, expect } from "@playwright/test";


test('Verify The KeyBord Actions', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const input1 = page.locator("#input1");

    //Fous on input1
    await input1.focus();

    //Add the Text 
    await page.keyboard.insertText('Welcome');

    //Select  the Text
    await page.keyboard.press('Control+A');

    //Copy The Text
    await page.keyboard.press('Control+C');

    // Click The Tab
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    //Past The Text
    await page.keyboard.press('Control+V');

    // Click The Tab
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    //Past The Text
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(10000);

})

test.only('Verify KwyBordAction 2', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const input1 = page.locator("#input1");
    //Fous on input1
    await input1.focus();

    await page.keyboard.insertText('Hi Lock');

    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');

    await page.keyboard.down('Control');
    await page.keyboard.press('C');
    await page.keyboard.up('Control');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');
    
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');
    await page.waitForTimeout(10000);
})