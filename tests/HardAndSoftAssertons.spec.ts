import {test,Locator,expect} from "@playwright/test";


test('Verify Hard and Soft Assertions', async ({page}) => {
    // Test implementation here

    await page.goto("https://demowebshop.tricentis.com/");

    const title = await page.title();

    console.log("Title of the page is : " + title);

    // Hard Assertion
    expect(title).toBe("Demo Web Shop123"); // This will fail and the test will stop execution here

    // Soft Assertion
    expect.soft(title).toBe("Demo Web Shop123"); // This will fail but the test will continue

    console.log("This line will be executed even if the soft assertion fails.");
});