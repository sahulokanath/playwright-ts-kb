import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User logs in successfully on SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(
    process.env.USERNAME!,
    process.env.PASSWORD!
  );

  await expect(page).toHaveURL(/inventory.html/);
});
