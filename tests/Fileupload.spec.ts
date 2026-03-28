import { test, Locator, expect } from "@playwright/test";


test('Verify The Single File Upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("#singleFileInput").setInputFiles("/home/lokanath/TSDEMOs/playwright-ts-kb/tests/uploadfile/simple 1.txt");
    await page.locator('button:has-text("Upload Single File")').click();

    const single = await page.locator("#singleFileStatus").textContent();
    expect(single).toContain('simple 1.txt');

    console.log(single)
    await page.waitForTimeout(10000);


})

test.only('Verify The Multiple File Upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("#multipleFilesInput").setInputFiles(["/home/lokanath/TSDEMOs/playwright-ts-kb/tests/uploadfile/simple 1.txt", "/home/lokanath/TSDEMOs/playwright-ts-kb/tests/uploadfile/Day30-MouseActions+&+Scrolling.pdf", "/home/lokanath/TSDEMOs/playwright-ts-kb/tests/uploadfile/Day31-Keyboard+actions,+file+uploads+and+download.pdf"]);
    await page.getByText('Upload Multiple Files').click();

    const multi = await page.locator("#multipleFilesStatus").textContent();
    expect(multi).toContain('simple 1.txt');
    expect(multi).toContain('Day31-Keyboard+actions,+file')
    expect(multi).toContain('Day30-MouseActions+&+Scrolling.pdf')
    console.log(multi)
    await page.waitForTimeout(10000);


})