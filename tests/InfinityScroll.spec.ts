import { test, expect, Locator } from "@playwright/test";


test('Verify Scroll', async ({ page }) => {

    test.slow();// set timout for a single test easy way to triple the defult timout 30 sec (3000sec)

    await page.goto("https://www.booksbykilo.in/children-books");

    let perviousHeight = 0;
    let bookFound = false;

    while (true) {

        const allBook = await page.locator(".book_display h3").allTextContents();

        //console.log(allBook)

        if (allBook.includes("Road Burner")) {

            console.log("Book Found");
            bookFound = true;
            expect(bookFound).toBeTruthy();
            break;
        }

        //scroll Down Page

        await page.evaluate(() => {

            window.scrollTo(0, document.body.scrollHeight);
        })

        await page.waitForTimeout(5000);

        //captuer the current hight of the page

        const currentHight = await page.evaluate(() => {

            return document.body.scrollHeight;
        })

        console.log("Perviouse",perviousHeight);
        console.log("Cueert",currentHight)

        if(currentHight===perviousHeight)
        {
            break;
        }

        perviousHeight=currentHight;
    }

    console.log("Reached The end of the  page")

    if(!bookFound)
    {
        console.log("Book Not Found");
    }


})


   
