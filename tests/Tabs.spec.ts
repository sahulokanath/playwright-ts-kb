import { test, Locator, chromium } from "@playwright/test";
import { ChildProcess } from "node:child_process";
import { promises } from "node:dns";


test('Verify Tabs', async () => {

    const browser = await chromium.launch();

    const context = (await browser).newContext();

    const prentPage = (await context).newPage();

    (await prentPage).goto("https://testautomationpractice.blogspot.com/");

    // 2 Statement should run paralley that why we are using  promise.all method
    const [chiledPage] = await Promise.all([(await context).waitForEvent('page'), (await prentPage).locator("button:has-text('New Tab')").click()]);

    const page = (await context).pages();


    //Approach:1
    console.log("Tital Of The PreantPage", (await prentPage).title());
    console.log("Tital Of The Chiled Page", await chiledPage.title());

    //Approach :2

    console.log("Tital Of The PreantPage", page[0].title());
    console.log("Tital Of The Chiled Page", page[1].title());

    console.log("NO OF PAGES ", page.length);


})