import { test, Locator, expect } from "@playwright/test";

test.beforeEach('beforetest',async({page})=>{

     page.goto('https://demowebshop.tricentis.com/login');
})

test('Verify The Report1', async ({ page }) => {

   
    const logo = page.getByRole('img', { name: 'Tricentis Demo Web Shop' })

    await expect(logo).toBeVisible();
})


test('Verify The Report2', async ({ page }) => {

   
    const stringmass = page.getByRole('heading', { name: 'Welcome, Please Sign In!' })

    await expect(stringmass).toBeVisible();
})

test('Verify The Report3', async ({ page }) => {

   
    const text =  page.getByText('Powered by nopCommerce1', { exact: true })
    await expect(text).toBeVisible();
})