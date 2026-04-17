import { test, expect } from "@playwright/test";
import fs from "fs";

// ✅ Read JSON safely
const jsonPath = "tests/testdata/data.json";
const loginData:any=JSON.parse(fs.readFileSync(jsonpath,'utf-8'));

test.describe("Login Data Driven Tests", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login");
  });

  // ✅ Data-driven loop
  for (const data of loginData) {

    test(`Login Test | ${data.email}`, async ({ page }) => {

      // 🔹 Fill form
      await page.fill("#Email", data.email);
      await page.fill("#Password", data.password);
      await page.click("input.button-1.login-button");

      // 🔹 Assertion
      if (data.expected === "success") {

        await expect(page.locator("a.ico-logout")).toBeVisible();

      } else {

        const errorMsg = page.locator(".validation-summary-errors");
        await expect(errorMsg).toContainText("Login was unsuccessful");

        await expect(page).toHaveURL(/.*login/);
      }
    });

  }
});