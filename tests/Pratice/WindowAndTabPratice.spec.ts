import { test, expect, chromium } from '@playwright/test';

const URL = 'https://qaplayground.com/practice/tabs-windows';

test.skip('Open link new tab swithc', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(URL);

    await page.waitForTimeout(5000);

    const [newTab] = await Promise.all([

        context.waitForEvent('page'),
        page.locator('#btn-open-home-tab').click()
    ])

    await newTab.waitForLoadState();
    const titleOfNewTab = await newTab.title();

    console.log("Title OF NEwTab-->", titleOfNewTab);

    await expect(await newTab.title()).toBe(titleOfNewTab);
    await page.waitForTimeout(5000);
});


test('Verify the Window', async ({ }) => {

    //chrome browser created
    const browser = await chromium.launch();

    //context creted like window/tab
    const context = await browser.newContext();

    //new page creted
    const page = await context.newPage();
    await page.goto(URL);


    //At a Time need to performe the task that why promise all using 
    const [newWindow] = await Promise.all([

        //wait for new tab
        context.waitForEvent('page'),
        page.locator("//button[contains(text(),'Open Multiple Windows')]").click() // click the action in newtab
    ])

    await newWindow.waitForLoadState();
    console.log("New Window Title:", await newWindow.title());
    await page.bringToFront();
    console.log("New current Title:", await page.title());
    //to count how many pages is opened
    const allpage = context.pages();
    console.log(allpage.length)
    await page.waitForTimeout(5000);


})

