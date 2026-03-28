import { test, expect, Page, chromium, firefox, webkit } from "@playwright/test";

test('Verify Browser ContextDemo', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    //await page.goto("https://testautomationpractice.blogspot.com/");

    console.log("NO Of Pages Created", context.pages().length)// It will Give the Number OF Pages Created 

    await page1.goto("https://ui.vision/");
    await expect(page1).toHaveTitle("2025 Open-Source RPA Software/Web Automation/Computer Use for Windows, macOS and Linux")
    await page1.waitForTimeout(5000);

    await page2.goto("https://playwright.dev/docs/frames");
    await expect(page2).toHaveTitle("Frames | Playwright");
    await page2.waitForTimeout(5000);

})