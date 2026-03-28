import { test, expect, Locator } from "@playwright/test";

test.skip('Verify Hidden DropDown', async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/");

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");

  await page.getByRole("button", { name: "Login" }).click();

  await page.getByText('PIM').click();

  // Open dropdown
  await page.locator('.oxd-select-text').first().click();

  // Wait for dropdown options
  const allHidden: Locator = page.locator('div[role="listbox"] span');

  await allHidden.first().waitFor();

  const count = await allHidden.count();

  console.log("Total Dropdown Options:", count);

  for(let i=0;i<count;i++)
  {
     console.log(await allHidden.nth(i).textContent())
  }

  for(let j=0; j<count;j++)
  {

    const text=await allHidden.nth(j).textContent();
      if(text=='Full-Time Probation')
      {
          await allHidden.nth(j).click();
          break;
      }
  }

  await page.waitForTimeout(5000);
});

test('Verify using Alltext',async({page})=>{

     await page.goto("https://opensource-demo.orangehrmlive.com/");

  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText('PIM').click();

  // Open dropdown
  await page.locator('.oxd-select-text').first().click();

  // Wait for dropdown options
  const allHidden: Locator = page.locator('div[role="listbox"] span');

  await allHidden.first().waitFor();

  const count = await allHidden.count();

 // here i have converted to alltext contents
const singleText:string[]=await allHidden.allTextContents()


//for each loop i have used 
for(const option of singleText)
{
    console.log(option)
}
})