import { test, expect, devices } from '@playwright/test';



test.skip('test', async ({ page }) => {
  test.use({
    ...devices['iPhone 15'],
  });

  await page.goto('https://www.flipkart.com/');
  await page.locator('#app-header').getByRole('button').click();
  const serch = page.getByTitle('Search for Products, Brands and More')
  await serch.fill('mobile phone');
  await page.getByText('mobile phone  under 30000').click();


});


test.skip('test2', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('button', { name: '✕' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).click();
  await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('mobile phone');
  await page.getByRole('link', { name: 'mobile phone under 15000' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bestseller MOTOROLA g35 5G (' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Bestseller MOTOROLA g35 5G (' }).click();
  const page2 = await page2Promise;
  await expect(page.getByRole('link', { name: 'Bestseller MOTOROLA g35 5G (' })).toBeVisible();
});


test('Ajio', async ({ browser }) => {

  const context = await browser.newContext({
    permissions: ['geolocation']
  })

 const page= await context.newPage();

  await page.goto('https://www.ajio.com/');
  await page.getByPlaceholder('Search AJIO').fill('T-shirt');

  await page.locator('span.ic-search').click();

})