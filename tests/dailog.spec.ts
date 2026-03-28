import { test, expect, Locator } from "@playwright/test";
import { text } from "node:stream/consumers";


test.skip('Verify The Dailog', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/")
  page.on('dialog', (dialog) => {

    console.log("Type oF dialog", dialog.type());
    expect(dialog.type()).toContain('alert');
    console.log("Masgge For Dialong", dialog.message())
    expect(dialog.message()).toContain('I am an alert box!');
    dialog.accept();
  })
  await page.locator("#alertBtn").click();
  await page.waitForTimeout(5000);

})


test.skip('Verify Confirmation Alert', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on('dialog', (dialog) => {

    console.log("Type of Alert:--", dialog.type())
    expect(dialog.type())
    console.log("Dialog Massage:--", dialog.message());
    dialog.dismiss();

  })

  const text: string = await page.locator('#demo').innerText();

  expect(page.locator('#demo')).toHaveText('You pressed Cancel!')

  await page.locator('#confirmBtn').click();

  console.log("Text:--", text)
  await page.waitForTimeout(5000);
})

test.only('Verify Prompt Alert', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/")

  page.on('dialog', (dialog) => {

    console.log(dialog.message());
    console.log(dialog.type());
    expect(dialog.type()).toContain('prompt');
    console.log(dialog.defaultValue())
    dialog.accept('hi');

  })
  page.locator('#promptBtn').click();

  const test1: string = await page.locator('#demo').innerText();

  await expect(page.locator('#demo')).toHaveText('Hello hi! How are you today?')

  console.log(test1)
  await page.waitForTimeout(5000);
})
