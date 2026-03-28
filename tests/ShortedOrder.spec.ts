import {Locator,test,expect} from "@playwright/test";


test ('Verfify DropDown Short', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

  const   DropDwon:Locator=page.locator("#animals option");
 //const   DropDwon:Locator=page.locator("#colors option");
  const OptionDropDwon:string[]= (await DropDwon.allTextContents()).map(text=>text.trim())
  //const OptionDropDwon:string[]= (await DropDwon.allTextContents()).map(text=>text.trim())



  // String Are emutable if we will use sort array original value aslo will change  , so we need to use ...[spried oprater] wee need use it will keep origianla value 
/* 
   const OriginalValue:string[]=OptionDropDwon;
   const SortValue:string[]=OptionDropDwon.sort();

    console.log("Original Value",OriginalValue);
    console.log("SortValue Value",SortValue);
*/

    const OriginalValue1:string[]=[...OptionDropDwon];
   const SortValue1:string[]=[...OptionDropDwon].sort();

    console.log("Original Value",OriginalValue1);
    console.log("SortValue Value",SortValue1);

    expect(OriginalValue1).toEqual(SortValue1);

});