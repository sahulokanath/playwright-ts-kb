import { test, expect, Locator, Page } from "@playwright/test";



async function slectiondate(selectMonth: string, selectYear: string, selectDate: string, page: Page, ifFuture: boolean) {

  while (true) {

    const currentMonth = await page.locator('.ui-datepicker-month').textContent();
    const currentYear = await page.locator('.ui-datepicker-year').textContent();

    if (currentMonth === selectMonth && currentYear === selectYear) {
      break;
    }

    if (ifFuture === true) {

      await page.locator('.ui-datepicker-next').click(); //Feuter
    }
    else {
      await page.locator('.ui-datepicker-prev').click();//past 
    }

  }

  const AllDate = await page.locator('.ui-datepicker-calendar td').all();

  for (const ClickDate of AllDate) {
    const dt = await ClickDate.innerText();

    if (dt === selectDate) {
      ClickDate.click()
    }
  }

}
test('Verify Date Picker', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  const selectDate = page.locator('#datepicker');


  await selectDate.click();
  await expect(selectDate).toBeVisible();


  const month = "January";
  const year = "2028";
  const date = "16";

  await slectiondate(month, year, date, page, true);

  const expectDate = "01/16/2028";
  await expect(selectDate).toHaveValue(expectDate);
  await page.waitForTimeout(5000);


});