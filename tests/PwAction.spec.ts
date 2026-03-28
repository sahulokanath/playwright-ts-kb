import {test,expect,Locator} from "@playwright/test";

//Text input/Text Box/Input Box

test('Verify Action Classs',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const textbox:Locator= page.locator("#name");

await expect(textbox).toBeVisible();
await expect(textbox).toBeEnabled();

const att= await textbox.getAttribute("maxlength");

expect(att).toBe('15')

await textbox.fill("Lokanath Sahu");

const innervalue= await textbox.inputValue();

await expect(innervalue).toBe('Lokanath Sahu');

})



test('Radio Button Check Box',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const RadioButton:Locator=page.locator("#male");

await expect(RadioButton).toBeVisible();
await expect(RadioButton).toBeEnabled();

expect(await RadioButton.isChecked()).toBe(false);

await RadioButton.check();// Select the Radio Button 

expect(await RadioButton.isChecked()).toBe(true);
await expect(RadioButton).toBeChecked(); //Preferable

await page.waitForTimeout(5000);

})


test.only('Check Box Check',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

 const CheckBox:Locator = page.getByLabel("Friday");
 
 await CheckBox.check();
 await expect(CheckBox).toBeChecked();

 //select all the check box
 const Allcheck:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

 const checkall=Allcheck.map(index=>page.getByLabel(index));
expect(checkall.length).toBe(7)

//select all check box
for( const singleCheck of checkall)
{
    await singleCheck.check();

    await expect(singleCheck).toBeChecked();
}

// select last 3 check box

for(const single of checkall.slice(-3))
{

  await  single.uncheck();

  await expect(single).not.toBeChecked();
}

//Toggle checkbox : if checked uncheck ,if unchecked check assert state flipped 

for( const singel of checkall)
{
    if(await singel.isChecked())
    {
    await singel.uncheck();

    await expect(singel).not.toBeChecked();
    }
      await singel.check();

    await expect(singel).toBeChecked();




}


//Rendom Select Cehck box index [1,4,6]

const index :number[]=[1,4,6];
for(const i of index)
{
 await checkall[i].check();
 await expect(checkall[i]).toBeChecked();
}
await page.waitForTimeout(5000);
})


/*
const week:string="Friday";

for( const lebale of week)
{

    if(lebale.toLowerCase()===week.toLowerCase())
    {
        const checkboxs= page.getByLabel(lebale);
        await expect(checkboxs).toBeChecked();
    }
}

*/