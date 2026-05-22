import {test,expect} from '@playwright/test';

test.skip('Verify The Using Contains method Locator',async({page})=>{

    await page.goto('https://www.wikipedia.org/');

    const Deutsch= page.locator("//strong[contains(text(),'Deutsch')]");

    await expect(Deutsch).toBeVisible();

   const wikispecies=page.locator("//span[normalize-space()='Free species directory']")
   //span[normalize-space(@data-jsl10n)='wikispecies.slogan']
   const test=await wikispecies.allInnerTexts();

   console.log(test)
   

    await Deutsch.click();

    await page.waitForTimeout(5000);

   
})

test.skip('Verify the alert',async({page})=>{

    await page.goto("https://qaplayground.com/practice/alerts-dialogs");

    //Hey Playwright — whenever a dialog appears on this page, run this function automatically." First and perfrom the action later
    page.on('dialog',(dialog)=>{

        //page.waitForEvent('popup');
    console.log(dialog.message())
    console.log(dialog.type())
    dialog.accept();
       
    })
   await page.getByRole('button',{name:'Simple Alert'}).click();

    await page.waitForTimeout(5000);
})

test.skip('Verify the alert confrom',async({page})=>{

    await page.goto("https://qaplayground.com/practice/alerts-dialogs");

    //Hey Playwright — whenever a dialog appears on this page, run this function automatically." First and perfrom the action later
    page.on('dialog',(dialog)=>{
    console.log(dialog.message())
    console.log(dialog.type())
    dialog.dismiss(); 
    })
   await page.getByRole('button',{name:'Confirm Alert'}).click();

    await page.waitForTimeout(5000);
})


test.skip('Verify the alert promt confrom',async({page})=>{

    await page.goto("https://qaplayground.com/practice/alerts-dialogs");

    //Hey Playwright — whenever a dialog appears on this page, run this function automatically." First and perfrom the action later
    page.on('dialog',(dialog)=>{
    console.log(dialog.message())
    console.log(dialog.type())
    dialog.accept('hi..'); 
    })
   await page.getByRole('button',{name:'Prompt Alert'}).click();

   const text:string =await page.locator("//span[@class='font-semibold']").innerText();

   await expect(page.locator("//span[@class='font-semibold']")).toHaveText('hi..')

    await page.waitForTimeout(5000);
})
test('Verify the alert promt confrom',async({page})=>{

    await page.goto("https://qaplayground.com/practice/alerts-dialogs");

   
})

