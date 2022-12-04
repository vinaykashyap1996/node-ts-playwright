import {test,expect} from '@playwright/test';

test('my first playwright test', async ({page}) => {
    //opening of page
    await page.goto('https://google.com');

    //identifying the accept button and clicking the accept button
    const acceptAllbutton = page.locator('#L2AGLb')
    await acceptAllbutton.click();

    //identtifiying the input box and writing something in it to perform a search
    await page.locator('[name="q"]').fill('real madrid');

    await page.locator('[aria-lable="Search"]').press('Enter');

    //method to pause the search process
    await page.pause()
})
