import { test } from "@playwright/test";


test.beforeEach('berforeTest', () => {
    console.log('BeforeEach..')
})
test.afterEach('berforeTest', () => {
    console.log('AfterEach..')
})

test.beforeAll('beforeAll', () => {
    console.log('BeforAll..')
})

test.afterAll('AfterAll', () => {
    console.log('AfterAll..')
})



test('Verify The Test1', async ({ page }) => {

    console.log("Test 1");
})


test('Verify The Test2', async ({ page }) => {

    console.log("Test 2");
})

test('Verify The Test3', async ({ page }) => {

    console.log("Test 3");
})
test('Verify The Test4', async ({ page }) => {

    console.log("Test 4");
})