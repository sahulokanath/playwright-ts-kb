import {test,Locator,expect} from "@playwright/test";


test('Verify Duplicat DropDwon',async({page})=>{


   await page.goto("https://testautomationpractice.blogspot.com/");

  //const ListOfDropDown:Locator= page.locator("#colors option");
  const   ListOfDropDown:Locator=page.locator("#animals option");


  const optionText:string []=(await ListOfDropDown.allTextContents()).map(text=>text.trim())

  const myset=new Set<string>;

  const duplicate:string[]=[];

  for(const text of optionText)
  {
    if(myset.has(text))
    {
        duplicate.push(text);
    }
    else
    {
        myset.add(text);
    }
  }


console.log("Duplicate Elements:====>",duplicate)

if(duplicate.length>0)
{
  console.log("Duplicate Option Found:",duplicate)
}
else
{
    console.log("No Duplicate Option  Found")
}

})