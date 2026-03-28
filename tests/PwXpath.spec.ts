import { test, expect, Locator } from "@playwright/test";

test("Verify the Xpath locator",async({page})=>
{

    await page.goto("https://demowebshop.tricentis.com/");


    //absult Xpath
    const logo :Locator=page.locator('//img[@alt="Tricentis Demo Web Shop"]');
     await expect(logo).toBeVisible();

     //Relative Xpath logo

     // we can user xapath=  OR //
     const logo1:Locator=page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]")
     await expect(logo1).toBeVisible();


   const products: Locator=page.locator("//h2/a[contains(@href,'computer')]");
  const productsCount:Number=await products.count();

  console.log("Number of coumputer in The Webpage:",productsCount);
  expect(productsCount).toBeGreaterThan(0);
     
 
  console.log("First Computer", await products.first().textContent());
  console.log("Last Computer", await products.last().textContent());
  console.log("nth Computer", await products.nth(2).textContent());
  console.log("First Computer", await products.nth(1).textContent());


  let productTiles:string[]= await products.allTextContents();

  console.log("All The Titiles:",productTiles);

  for(let pt of productTiles)
  {
    console.log(pt)
  }


  await expect(page.locator('//a[text()="Register"]')).toBeVisible();

 const lastElement :Locator=await page.locator("//div[@class='column follow-us']//li[last()]");
 console.log("LastElements:", await lastElement.textContent())
})
