import { test, expect, Locator } from "@playwright/test";


test("Verify Css Locator",async({page})=>
{

    await page.goto("https://demowebshop.tricentis.com/");

    /*
    Css Locator:- 1.Absulte css locator 2.Relative Css Locator

    i. tage with id --> tag#id OR #id
    ii. tage with class name -->tag.class OR .class
    iii. tage with any other attribute tag[attibute=vale] OR [attibute=vale] 
    iv.  tage with class and attibute  tage.class[attibute=vale]  OR .class[attibute=vale] 
    
    */

    // i. tage with id --> tag#id OR #id
   
    const secrbox:Locator =page.locator("#small-searchterms");
    await secrbox.fill("mac Book");
    await secrbox.clear();

    //ii. tage with class name -->tag.class OR .class
   // await page.locator(".search-box-text").fill("Dell")

    //iii. tage with any other attribute tag[attibute=vale] OR [attibute=vale] 
    // await page.locator("input[name='q']").fill("lenevo");

    // iv.  tage with class and attibute  tage.class[attibute=vale]  OR .class[attibute=vale] 
    await page.locator("input.search-box-text.ui-autocomplete-input[name='q']").fill("hp")
    await page.waitForTimeout(5000);



    //Absoult Css locator
   await page.goto("https://testpages.eviltester.com/pages/basics/basic-web-page/")

   page.locator("")

})