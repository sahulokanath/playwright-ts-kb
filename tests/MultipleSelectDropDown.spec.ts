import {test,Locator,expect} from "@playwright/test";


test('Verify Multiple select Drop Down', async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/");

await page.locator("#colors").selectOption(['Red','Green','Blue']);// Using visible text

await page.locator('#colors').selectOption(['red','blue']);// using attributs value 

await page.locator('#colors').selectOption([{label:'Red'},{label:'Green'},{label:'Yellow'}]);//Using lable

await page.locator('#colors').selectOption([{index:1},{index:4}]);//Using Index

//Check the Number of Options Form DropDown
const TotalValue:Locator=page.locator("#colors option")
await expect(TotalValue).toHaveCount(7);


//chceck the option is present or not

const optionText:String []=(await TotalValue.allTextContents()).map(text=>text.trim());

console.log(optionText)
await expect(optionText).toContain('Green');

// List OF Drop Down Presnet

for(const index of optionText)
{
    console.log
    (index)
}


})