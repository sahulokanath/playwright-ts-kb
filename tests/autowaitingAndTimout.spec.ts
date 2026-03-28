import { test, Locator, expect } from "@playwright/test";

// Default time For locater is 30 sec and assertion default time is 5 sec

test.setTimeout(50000)//50sec  -- it will make the full test to 50sec dealy 
test.slow()// it will make the test to 90 sec 

test('Verify The Autotimeout', async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/")

    //asserstion -auto awit works
    expect(page).toHaveURL('https://demowebshop.tricentis.com/', { timeout: 10000 })// it will wait for 10 sec  specific elemet

    //actions -auto wait works
    // IT will not check the actionability check directlly it will performe the action
    //https://playwright.dev/docs/actionability
    page.locator("#small-searchterms").fill('laptop', { force: true });
    page.locator("//input[@type='submit']").click({ force: true })

})

test('Playwright Assertions Demo', async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/")

    //asserstion -auto awit works
    expect(page).toHaveURL('https://demowebshop.tricentis.com/')// it will wait for 10 sec  specific elemet


    //Auto wait rety:wait for element to have text
    await expect(page.locator(':text("Welcome to our store")')).toHaveText('Welcome to our store')
    await expect(page.locator(':text("Welcome to our store")')).toBeVisible();


    const title = page.title();

    // Non -retying assertion (excute imditlley ,no retry)
    expect((await title).includes('Demo Web Shop')).toBeTruthy();


})