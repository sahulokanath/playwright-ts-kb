import {expect,Locator,test} from '@playwright/test';

test('handaling Dynamic Elements',async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");

    for(let i=0 ;i<=5;i++)
    {

       const button: Locator=page.locator("//button[text()='START' or text()='STOP']");
       await button.click();

       await page.waitForTimeout(2000);
    }
})