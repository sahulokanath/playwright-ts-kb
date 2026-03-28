import { test, Locator, expect } from "@playwright/test";


test('Count The Book', async ({ page }) => {

    test.slow();

    await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500")

    let BookFound = false;
    let pervviousBook = 0;


    while (true) {


        await page.evaluate(() => {
            window.scroll(0, document.body.scrollHeight);
        })



        const allBookList = await page.locator("#productsDiv h3").allInnerTexts();
        console.log(allBookList)



        if (allBookList.includes('Rishi Sunak: The Rise')) {

            console.log("Book Found");

            BookFound = true;

            await expect(allBookList).toBeTruthy();
            break;
        }

        const currentBook = await page.evaluate(() => {
            return document.body.scrollHeight
        })

        await page.waitForTimeout(5000);

        if (currentBook === pervviousBook) {
            break;
        }
        currentBook == pervviousBook;

        console.log("Per", pervviousBook);
        console.log("cur", currentBook);


        console.log("Count OF the Book", allBookList.length)
    }

})