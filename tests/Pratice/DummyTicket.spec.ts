import { test, expect, Locator } from "@playwright/test";


test('Book The Ticket ', async ({ page }) => {


  await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

  const DummyticketforVisa = page.locator("#product_549");

  await DummyticketforVisa.click();

  await expect(DummyticketforVisa).toBeVisible();

  await page.locator("#travname").fill("Lokanath");
  await page.locator("#travlastname").fill("Sahu");
  await page.locator("#order_comments").fill("Im Happy To Travel")

  const DOB = page.locator("#dob");

  await DOB.click();

  await page.locator(".ui-datepicker-year").selectOption('2000');
  await page.locator('.ui-datepicker-month').selectOption('3');
  await page.locator("//a[text()='29']").click();

  await page.locator('input[name="sex"]').nth(0).click();

  await page.locator("#addmorepax").click();

  await page.locator("#select2-addpaxno-container").click();

  await page.locator('//ul[@class="select2-results__options"]/li').nth(2).click();
  await page.locator('input[name="traveltype"]').nth(1).click();

  await page.locator('#fromcity').fill("Bangoler");

  await page.locator('#tocity').fill('USA');

  await page.locator('#departon').click();;
  await page.locator('.ui-datepicker-month').selectOption('5');
  await page.locator('.ui-datepicker-year').selectOption('2026');
  await page.locator("//a[text()='30']").click();
  await page.locator('.ui-datepicker-close').click();
  await page.waitForTimeout(5000);
})