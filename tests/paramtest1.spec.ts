import { test, expect, Locator } from "@playwright/test";

const serchIteam: string[] = ['laptop', 'smartphone', 'Gift Card', 'Mobile']

for (const item of serchIteam) {

    test(`Login ${item}`, async ({ page }) => {

        await page.goto("https://demowebshop.tricentis.com/")
        await page.locator('#small-searchterms').fill(item);
        await page.locator('input.button-1.search-box-button:visible').click();
        await expect(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true});

    })
}



