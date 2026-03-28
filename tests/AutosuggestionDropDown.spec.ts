import { test, expect, Locator } from "@playwright/test";

test('Verify the AutoSuggestion Dropdown', async ({ page }) => {

  await page.goto("https://www.flipkart.com/");

  await page.locator('input[name="q"]').first().fill("iphone");
  await page.waitForTimeout(5000);

  const allSuggestions: Locator = page.locator("ul li");

  const count = await allSuggestions.count();
  console.log("Total Suggestions: " + count);

  console.log( "find The 5th elements...",await allSuggestions.nth(5).textContent());
  for (let i = 0; i < count; i++) {

    const text = await allSuggestions.nth(i).textContent();
    console.log(text);

  }

});