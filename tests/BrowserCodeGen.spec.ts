import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.booksbykilo.in/new-books?pricerange=201to500');
  await page.getByRole('button', { name: 'Hide survey' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('img', { name: 'Poems for Little Children-by-' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('form')).toContainText('Poems for Little Children');
});