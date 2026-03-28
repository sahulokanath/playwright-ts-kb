import {test,expect,Locator} from "@playwright/test";

test('Verify The Static Tables',async({page})=>{


   await page.goto("https://testautomationpractice.blogspot.com/");

  const table :Locator= page.locator('table[name="BookTable"]');

  // Count  the Number of Row's

  const rows=table.locator('tr')
  await expect(rows).toHaveCount(7);

  // Count the number of Colum

 const column:Locator= table.locator('th')

 await expect(column).toHaveCount(4)

 const vlaueColum:string[]=await column.allInnerTexts()

 console.log(vlaueColum)

// Find 2nd row all elements

const SecndRow=table.locator('tr').nth(2)

const secndRowvalue:string[]=(await SecndRow.allInnerTexts()).map(text=>text.trim());

console.log(secndRowvalue)

// print all the value for 

const allRowValue:Locator[]=await rows.all();

console.log("BookName Author subject  price")
for( const ele of allRowValue.slice(1)) //slice 1 it will romve the header
{

  const colm=await ele.locator('td').allInnerTexts();

  console.log(colm.join('\t'))
  
}

// Print book  name autor of mukesh

for( const ele of allRowValue.slice(1))
{
  const cells =await ele.locator('td').allInnerTexts();

  const auth= cells[1];
 const book= cells[0]

 const mukeshbook :string[]=[];

 if(auth==="Mukesh")
 {

  console.log(`${auth} \t ${book}`)
  mukeshbook.push(book)
 }
}

awiat expect(mukeshbook).tohaveLength(2)

})