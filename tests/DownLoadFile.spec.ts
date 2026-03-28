import { test, expect, Locator } from "@playwright/test";
import fs from 'fs';

test('Verify The Download file text', async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")

    await page.locator("#inputText").fill("Welcome");
    await page.locator("#generateTxt").click();

    //Click the Download link So need the Event 
    const [downloads] = await Promise.all([page.waitForEvent('download'), page.locator("#txtDownloadLink").click()]);

    // We will Provide the Download File Path And Save
    const pathDownload = "/home/lokanath/TSDEMOs/playwright-ts-kb/tests/downloadfile/info.txt";
    await downloads.saveAs(pathDownload);

    // To Check file path is present or not 
    const filePrasent = fs.existsSync(pathDownload);
    expect(filePrasent).toBeTruthy();

    await page.waitForTimeout(5000);


})

test.only('Verify The PDF file Download', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");

    await page.locator("#inputText").fill("Welcome");
    await page.locator("#generatePdf").click();

    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("#pdfDownloadLink").click()
    ]);

    const downloadpath =
        "/home/lokanath/TSDEMOs/playwright-ts-kb/tests/downloadfile/info.pdf";

    // ✅ correct
    await download.saveAs(downloadpath);

    const presentfil = fs.existsSync(downloadpath);

    expect(presentfil).toBeTruthy();

    // delete file after check
    if (presentfil) {
        fs.unlinkSync(downloadpath);
    }

    await page.waitForTimeout(5000);

});