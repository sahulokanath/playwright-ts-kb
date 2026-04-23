import { test, Expect, Locator, expect } from "@playwright/test";


test.skip('test1', async ({ page }) => {

  //https://playwright.dev/docs/test-snapshots
  //Playwright Test includes the ability to produce and visually compare screenshots using await expect(page).toHaveScreenshot(). On first execution, Playwright test will generate reference screenshots. Subsequent runs will compare against the reference.
  //await page.goto("https://demowebshop.tricentis.com/");

  await page.goto("https://www.google.com/");


  //expect(await page.screenshot()).toMatchSnapshot('homepage.png');

  await expect(page).toHaveScreenshot();


})

test('test2', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  const logo = page.getByRole('img', { name: 'Tricentis Demo Web Shop' })

  expect(await logo.screenshot()).toMatchSnapshot('logo.png')

})