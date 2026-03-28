import {test,expect,Locator} from '@playwright/test';

test('Verify The Xpath Axes',async ({page})=>{

    await page.goto("https://www.w3schools.com/html/html_tables.asp")

   const self: Locator=page.locator("//td[text()='Germany']/self::td");


   //self axes xpath
   await expect(self).toBeVisible();
  await expect(self).toHaveText("Germany");
   //prent axes xpath

 const parent: Locator= page.locator("//td[text()='Germany']/parent::tr");



 await expect(parent).toContainText("Maria Anders");
 await expect(parent).toContainText("Alfreds Futterkiste Maria Anders Germany");

})