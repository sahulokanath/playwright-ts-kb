import {test,expect,Locator} from "@playwright/test";


test('Verify shadow Dom',async({page})=>{

   await page.goto("https://books-pwakit.appspot.com/")

  await page.locator("#input").fill("Playwright automation");

  await page.keyboard.press('Enter');
  await page.waitForTimeout(5000);

 const bookfound=await page.locator('h2.title').all();

 console.log(bookfound.length);
 expect(bookfound.length).toBe(20)


})