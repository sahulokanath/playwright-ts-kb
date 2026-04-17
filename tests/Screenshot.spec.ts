import { test, Locator, expect } from "@playwright/test";
import { timeStamp } from "node:console";


test('Verify The Screenshort', async ({ page }) => {


    const timeStamp = Date.now()// it will give the current time in miliseconds

    await page.goto("https://demowebshop.tricentis.com/")

    // it will take the screenshot of the page and save it in the specified path with the name home and current time in miliseconds

    await page.screenshot({ path: "/home/lokanath/TSDEMOs/playwright-ts-kb/tests/Screenshot" + "home" + timeStamp + ".png" })

    //Full Page Screenshot
    await page.screenshot({ path: "/home/lokanath/TSDEMOs/playwright-ts-kb/tests/Screenshot/" + "Homepage" + timeStamp + ".png", fullPage: true });


    const logo =  page.getByRole('img', { name: 'Tricentis Demo Web Shop' })

    logo.screenshot({ path: "/home/lokanath/TSDEMOs/playwright-ts-kb/tests/Screenshot/" + "logo" + timeStamp + ".png" })

   const sectionofPage= page.locator('//div[@class="product-grid home-page-product-grid"]');

   sectionofPage.screenshot({ path: "/home/lokanath/TSDEMOs/playwright-ts-kb/tests/Screenshot/" + "sectionOfPage" + timeStamp + ".png" })

   
    await page.waitForTimeout(5000);

})