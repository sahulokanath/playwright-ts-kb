import { test, expect, Locator } from "@playwright/test";

test("Verify Playwright Locators", async ({ page }) => {

  await page.goto("https://demo.nopcommerce.com/");

  // Image locator using alt text
  const logo: Locator = page.getByAltText("nopCommerce demo store");
  await expect(logo).toBeVisible();

   //Firnd  an  elemetsby the text it contains you can match by a substring exact string
  //locator by visible text
  //use this locator to find non interative  elemts like dov ,spam, p, 
  // for interative elements like button ,a,input, etc..use role locator
  /*
  <p>Welcome</p>
  <div>GOing Out</div>
   */
  // Non-interactive text locator
  await expect(
    page.getByText("Welcome to our store")
  ).toBeVisible();

  // Click Register link using role
  await page.getByRole("link", { name: "Register" }).click();




   await page.goto("http://127.0.0.1:5500/playwright-ts-kb/tests/phtml.html");

   await page.getByLabel("Email Address").fill("lokanath600@gmail.com");

   await page.getByPlaceholder("Enter your full name").fill("hi");

   await expect (page.getByTitle("Home page link")).toHaveText("Home");

   await expect((page.getByTestId("profile-name"))).toHaveText("John Doe");
   await expect((page.getByTestId("profile-email"))).toHaveText("john.doe@example.com")

  

});
