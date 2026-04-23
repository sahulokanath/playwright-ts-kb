import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  //grep:/@sanity/,
  //grepInvert:/@regression/,  // If tag is having regression it will not run
  //grep:/(?=.*@sanity)(?=.*@regression)/,  to run specifyning tag
  // fullyParallel: false,// By Defult Playwright run parallel Mood , if need to run the serial excution make this false 
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // workers: process.env.CI ? 1 : undefined,
  workers: 4,

  timeout: 60000,
  expect: {
    timeout: 5000,
  },

  reporter: [
    ['list'],
    ['line'],
    ['dot'],
    ['junit', { outputFile: 'result-xml' }],
    ['junit', { outputFile: 'result-json' }],
    ['html', { open: 'on-failure' }],
    ['allure-playwright']
  ],

  use: {


    //baseURL: process.env.BASE_URL,
    //headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on',
    //testIdAttribute:'data-pw'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //fullyParallel: false, // we can specifi the parallel excution  or serial
    },
   //  {
     //  name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
//},
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

});
