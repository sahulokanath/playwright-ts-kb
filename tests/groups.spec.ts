import { test, Locator, Expect } from "@playwright/test";


test.describe('Grouping1',()=>{

    test('Verify The Test1', async ({ page }) => {

    console.log("Test 1");
})


test('Verify The Test2', async ({ page }) => {

    console.log("Test 2");
})
})

test.describe('Grouping2',()=>{

    test('Verify The Test3', async ({ page }) => {

    console.log("Test 3");
})
test('Verify The Test4', async ({ page }) => {

    console.log("Test 4");
})
})

