import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.kreditbee.in/');
  await page.locator('#app-header').getByRole('button').click();
  await page.locator('div').first().click();
  await page.goto('https://www.kreditbee.in/signin');
  await page.locator('#fpl').getByRole('button', { name: 'KNOW MORE' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Loan' })).toBeVisible();
  await page.getByRole('button', { name: 'Back' }).click();
});