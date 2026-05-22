
import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

test('Verfiy the Daynamic wait ele', async ({ page }) => {

    await page.goto("https://qaplayground.com/practice/dynamic-waits");
    /*
        await page.locator("//button[@name='btn-delayed-alert']").click()
    
        const waitfor = page.waitForSelector("//button[@name='btn-show-element']", { timeout: 5000 });
        await page.locator("//button[@name='btn-show-element']").click();
        const text = await page.locator("//span[text()='Element is now visible!']").innerText();
        await expect(page.locator("//span[text()='Element is now visible!']")).toHaveText('Element is now visible!')
    */
    await page.locator("#btn-activate-trigger").click();
    const buttonvisiable = await page.waitForSelector('#btn-enable-after-delay', { timeout: 5000 });
    const ele = page.locator('#btn-enable-after-delay');

    console.log(await ele.textContent());

    await expect(ele).toBeVisible();

    await expect(page.locator('#btn-enable-after-delay')).toHaveText('Now Clickable!')

    await page.waitForTimeout(5000);
})