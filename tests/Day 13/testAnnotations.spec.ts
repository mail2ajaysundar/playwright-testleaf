import test from '@playwright/test'


test.skip(`Test Annotations with skip`,async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})

test.fixme(`Test Annotations with fixme`,async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})

test.fail(`Test Annotations with fail`,async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})

//slows down the test (double the timeout) based on condition
test(`Test Annotations with slow`,async({page,browserName})=>{
test.slow() //general config to double the test timeout
test.slow(browserName=='webkit') //to double timeout for a specific condition

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","demoCSR")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
})