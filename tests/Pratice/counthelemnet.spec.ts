import { test, expect } from "@playwright/test";

test.skip('Count 579 price on Myntra', async ({ page }) => {

    await page.goto("https://www.myntra.com/men-tshirts");

    // Wait for products to load
    await page.waitForSelector("(//span[text()='599'])");

    // Count how many 579 prices exist
    const count = await page.locator("(//span[text()='599'])",
        { hasText: "599" }).count();

    console.log("Total 579 prices found: " + count);

    // Optional: Assert at least 1 exists
    expect(count).toBeGreaterThan(0);
});



test.use({

    // Screenshot
    screenshot: 'only-on-failure',

    // Video
    video: 'retain-on-failure',

    // Trace
    trace: 'on-first-retry'

});

test.only('Click Van Heusen Product', async ({ page }) => {

    await page.goto('https://www.myntra.com/men-tshirts');
    /*
        const product = page.locator("li.product-base")
        .filter({ hasText: 'Van Heusen Innerwear' })
        .first();
    
        await product.scrollIntoViewIfNeeded();
    
        await product.click();
    */
    const textDis = page.locator("//h4[@class='product-product' and text()='Polo Collar Slim Fit T-shirt']");

    //const res=await expect(textDis).toBeEnabled();

    const counts=await textDis.count();
    console.log(counts);

  const tshir= page.locator('//li[@id="18389666"]//div[@class="product-productMetaInfo"]//h3[@class="product-brand"]');

  await expect(tshir).toBeVisible();
  const text=await tshir.allInnerTexts();
    console.log(text)
    await page.waitForTimeout(5000);

});
