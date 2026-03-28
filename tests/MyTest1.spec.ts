import { test, expect } from "@playwright/test";

test("Verify Page Url", async ({ page }) => {

  await page.goto("https://www.google.com/");

  const url: string = await page.url();
  console.log(url);

  await expect(page).toHaveURL("https://www.google.com/");
});
