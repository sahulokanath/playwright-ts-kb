import { test, Locator } from '@playwright/test';

test.skip('ver', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //With the Help of page.on method we will dicler the dialog and we will handle
    page.on('dialog', (dialog) => {

        console.log(dialog.message())
        dialog.accept()

    })

    await page.getByRole('button', { name: 'Simple Alert' }).click();
    await page.waitForTimeout(4000);

})


test.skip('dropdow Using Select class', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")


    // first give the coutry which praent --> selectOtion single select
    await page.locator('#country').selectOption('Canada');

    await page.waitForTimeout(5000);
    await page.locator('#country').selectOption([]);
    await page.waitForTimeout(5000);

    await page.locator('#country').selectOption(['Canada', 'China']);
    await page.waitForTimeout(5000);
})

test.skip('File Upload', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('#singleFileInput').setInputFiles('/home/lokanath/TSDEMOs/playwright-ts-kb/tests/uploadfile/Day30-MouseActions+&+Scrolling.pdf')
    await page.getByRole('button', { name: 'Upload Single File' }).click();
    await page.waitForTimeout(5000);
})


test.skip('Drag and drop', async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/")

    const drgme = page.getByText('Drag me to my target', { exact: true });
    const drop =page.getByText('Dropped!', { exact: true })


    await drgme.dragTo(drop);
    await page.waitForTimeout(5000);
})
test.only('Verify the Frame5 With inner Link', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame5 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_5.html" })

    if (frame5) {
        frame5.locator('[name="mytext5"]').fill("Hello Frmae5");
        const chiled = frame5.childFrames();
        frame5.locator("//a").click();
        

        await page.waitForTimeout(10000);

    }


})