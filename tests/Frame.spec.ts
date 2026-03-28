import { test, expect, Locator } from "@playwright/test";


test.skip('Verify The Frame', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frames = page.frames;

    console.log(frames.length)


    /*
        // Approche --1 using page.frame()
        const frame = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
        if (frame) {
    
            //await  frame.locator('[name="mytext1"]').fill('Hello');
    
            await frame.fill('[name="mytext1"]', 'hello');
        }
        else {
            console.log("NO Frame Present....")
        }
    */

    /// Approche --2 using framelocater()

    const inputBox = page.frameLocator('[src="frame_1.html"]').locator('[name="mytext1"]');
    await inputBox.fill('ABCD');

    await page.waitForTimeout(5000);
})

test.skip('Inner Frame /chiled ', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame3 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })

    if (frame3) {
        await frame3.locator('[name="mytext3"]').fill("Hi  Frame3");
        const child = frame3.childFrames();
        console.log('List Of Chiled Elements Present', child.length)
        const radio = child[0].getByLabel('I am a human');
        await radio.check();

        await expect(radio).toBeChecked();

    }
    else {
        console.log("No Frame Is Present");
    }

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