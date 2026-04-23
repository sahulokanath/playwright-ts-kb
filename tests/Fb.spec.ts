import {test,expect,Locator} from '@playwright/test';

test('Face Login',async({page})=>{
  await  page.goto('https://www.facebook.com/login');

  await page.locator('input[name="email"]').fill('sahulokanath382@gmail.com');
  await page.locator('input[type="password"]').fill('@1234@Guru');
await page.locator("//div[@class='x1ja2u2z x78zum5 x2lah0s x1n2onr6 xl56j7k x6s0dn4 xozqiw3 x1q0g3np x972fbf x10w94by x1qhh985 x14e42zd x9f619 xtvsq51 xqbgfmv xbe3n85 x7a1id4 x1d9i5bo x1xila8y x1bumbmr xc8cyl1']").click();
})
