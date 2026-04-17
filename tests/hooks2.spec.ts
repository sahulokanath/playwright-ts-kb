import { test, Page, expect } from "@playwright/test";
import { count } from "node:console";

// open App --beforeall

//login

//add card

//logout

//close--afterall

let page: Page;

test.beforeAll('BeforeAll', async ({ browser }) => {

    page = await browser.newPage();

    await page.goto("https://www.demoblaze.com/")
})

test.afterAll('AfterAll', async () => {
    await page.close();
})


test.beforeEach('Login', async () => {

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.locator('button[onclick="logIn()"]').click();
})

test.afterEach('Logout', async () => {
    await page.locator('#logout2').click();
})

test('Find The Number Of Books', async () => {
    let pageelement = page.locator('#tbodyid .hrefch');

    const count = pageelement.count();
    console.log("Number Mobile:", count);
    expect(pageelement).toHaveCount(9)

})

test('Add To card Book', async () => {

    await page.getByRole('link', { name: 'Samsung galaxy s7' }).click()

    page.on('dialog', async (dialog) => {

       // expect(dialog.message()).toContain('Product added.')
        await dialog.accept();
    });

    await page.getByRole('link', { name: 'Add to cart' }).click()



})