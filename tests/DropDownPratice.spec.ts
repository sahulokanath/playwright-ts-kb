import {test,Locator,expect} from "@playwright/test";
import { equal } from "node:assert";
import { text } from "node:stream/consumers";

test.skip('DropDownPratice',async ({page})=>{


    await page.locator("https://www.bstackdemo.com/");

    const allProduct:Locator=page.locator(".shelf-item__title")

    allProduct.allTextContents

    console.log (await allProduct.allTextContents())

     
    
}) 

test('DropDownPratice1', async ({ page }) => {
    // 1. Navigate to the page (Note: ensure you use page.goto)
    await page.goto("https://www.bstackdemo.com/");

    const allProduct: Locator = page.locator(".shelf-item__title");

    // 2. Wait for at least one element to be visible before grabbing the list
    // This ensures the DOM has populated.
   // await allProduct.first().waitFor();

    // 3. Now fetch and log all text contents
    const texts :string[]= await allProduct.allTextContents();
    console.log(texts);

    console.log(await allProduct.count())

 const allPrice:Locator=await page.locator(".shelf-item__price");

 const allcout = allPrice.count();

const countallprice= allPrice.count();
const countallPriduct=allProduct.count();
 
 

});