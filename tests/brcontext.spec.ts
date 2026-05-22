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

test.only('Verify Browser 1 ContextDemo', async () => {

  // 1. launch browser
  const browser = await chromium.launch();

  // 2. create context
  const context = await browser.newContext();

  // 3. new page
  const page1 = await context.newPage();

  await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


  // here we created the newpage/window /tab
  const newPage=context.waitForEvent('page');
  (await newPage).getByRole('link',{name:'OrangeHRM, Inc'})


});