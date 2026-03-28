import { test, expect } from "@playwright/test";

test('Verify Drag And Drop', async ({ page }) => {

    await page.goto(
        "https://demo.guru99.com/test/drag_drop.html"
    );

    const amount =
        page.locator("//a[@class='button button-orange']").nth(1);

    const amountDrop = page.locator("#amt7");


    const bank =
        page.locator("//a[@class='button button-orange']").nth(4);

    const bankDrop = page.locator("#bank");


    const amountLoan =
        page.locator("//a[@class='button button-orange']").nth(3);

    const amountDropLoan =
        page.locator("#amt8");


    const loan =
        page.locator("//a[@class='button button-orange']").nth(5);

    const loanDrop =
        page.locator("#loan");

    // debit side

    await bank.dragTo(bankDrop);

    await amount.dragTo(amountDrop);

    // credit side

    await loan.dragTo(loanDrop);

    await amountLoan.dragTo(amountDropLoan);

    const text = await page.getByText('Perfect!');

    await expect(text).toBeVisible();

    await expect(amountDrop)
        .toHaveText("5000");

    await expect(amountDropLoan)
        .toHaveText("5000");

});