import {test,Locator,expect} from "@playwright/test";


test('Verify Drop Down', async({page})=>{

  await  page.goto("https://testautomationpractice.blogspot.com/");

  // 1 .slect Options From tch drop Down (4 ways)

//await page.locator("#country").selectOption('Canada');//Visible text
// await page.locator('#country').selectOption({value:'uk'}); //by using value
//await page.locator('#country').selectOption({label:'Germany'});//using label
await page.locator('#country').selectOption({index:3});//using index

//2. Check number of options in the dropdowncount
const allDropDown:Locator=page.locator("#country>option")
await expect(allDropDown).toHaveCount(10);

//3 chekc an option present in the dropdown

const optiinText:string []=(await (allDropDown.allTextContents())).map(text=>text.trim());

console.log(optiinText)
expect(optiinText).toContain('Japan')                   

for( const option of optiinText)
{
  console.log(option)
}
})