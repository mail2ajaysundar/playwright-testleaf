import test from '@playwright/test';

test.only('File Upload using listener', async ({ page }) => {

    await page.goto("https://leafground.com/file.xhtml");

    // await page.locator("//span[text()='Choose']/following-sibling::input").first()
    //     .setInputFiles("data/FileUploads.txt");

    await page.waitForTimeout(3000);

    // type=file not available in the dom 

    const filepromise = page.waitForEvent('filechooser'); //this is the listener. it will choose the file 

    await page.locator("//span[text()='Choose']/following-sibling::input").first().click(); //clicks on the button where the file needs to be uploaded

    const fileupload = await filepromise; //a promise is resolved here by assigning it to the variable fileupload 
    console.log(fileupload.isMultiple()); //this is to just check if the button allows a single or multiple file upload 

    await fileupload.setFiles(["./data/FileUploads.txt"]); //this will choose the respective file from the playwright workspace and upload to the link 

    await page.waitForTimeout(3000);
});

test('File Download using listener', async ({ page }) => {

    await page.goto("https://leafground.com/file.xhtml");

    const filePromise = page.waitForEvent('download') //this is the listener . it will get the file 

    page.getByText('Download',{exact:true}).click()
    const filedownload=await filePromise

    await filedownload.saveAs(filedownload.suggestedFilename())

});