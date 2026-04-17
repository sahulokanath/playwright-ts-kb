import { test, expect } from "@playwright/test";
import path from "path";
import * as XLSX from "xlsx";

const excelPath = path.join(__dirname, "./testdata/logindata.xlsx");
const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const records: any[] = XLSX.utils.sheet_to_json(worksheet);

test.describe("Login Tests", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login");
  });

  for (const { email, password, validity } of records) {

    test(`Login | ${email}`, async ({ page }) => {

      await page.fill("#Email", email);
      await page.fill("#Password", password);
      await page.click("input.button-1.login-button");

      if (validity === "success") {
        await expect(page.locator("a.ico-logout")).toBeVisible();
      } else {
        await expect(page.locator(".validation-summary-errors"))
          .toContainText("Login was unsuccessful");

        await expect(page).toHaveURL(/.*login/);
      }

    });

  }

});