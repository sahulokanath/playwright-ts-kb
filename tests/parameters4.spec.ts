

import { test, expect } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";

// ✅ Read CSV safely
const csvpath = "tests/testdata/csvdata.csv";
const filecontent=fs.readFileSync(csvpath,'utf-8');

const recoreds=parse(filecontent,
    {
        columns:true ,
        skip_empty_lines:true

    }
)

test.describe("Login Data Driven Tests", async() => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login");
  });

  // ✅ Data-driven loop
  for (const data of recoreds) {

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