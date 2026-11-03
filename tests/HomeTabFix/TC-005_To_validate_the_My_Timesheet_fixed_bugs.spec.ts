import { test, expect } from '@playwright/test';

test(
  'To validate the "My Timesheet" fixed bugs',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-005' },
    tag: ['@QADENCE_TC_ID:TC-005'],
  },
  async ({ page, request }) => {

    let num: any;


    await test.step('#01 - Navigate to \'https://iassistant-qa.ideas2it.com/login\'', async () => {
      await page.goto('https://iassistant-qa.ideas2it.com/login');
    });

    await test.step('#02 - https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new', async () => {
      const apiResponse2 = await request.fetch('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=1', {
        method: 'GET',
      });
      const apiResponse2Body = await apiResponse2.json();
      expect(apiResponse2.status()).toBe(200);
      num = apiResponse2Body[0];
    });

    await test.step('#03 - Click on the \'Enter Ideas2IT Email\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).click();
    });

    await test.step('#04 - Fill the \'Enter Ideas2IT Email\' textbox with the random number from API response', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).fill(`${num}`);
    });
    //Start - Module - Login to Iassistant

    await test.step('#05 - Click on the \'Enter Ideas2IT Email\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).click();
    });

    await test.step('#06 - Enter email \'yogeshwar.sankaralingam@ideas2it.com\' in the \'Enter Ideas2IT Email\' field', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).fill('yogeshwar.sankaralingam@ideas2it.com');
    });

    await test.step('#07 - Click on the \'Enter the password\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the password", exact: true }).click();
    });

    await test.step('#08 - Enter password \'Popular@123\' in the \'Enter the password\' field', async () => {
      await page.getByRole("textbox", { name: "Enter the password", exact: true }).fill('Popular@123');
    });

    await test.step('#09 - Click the \'Login\' button', async () => {
      await page.getByRole("button", { name: "Login", exact: true }).click();
    });
    //End - Module - Login to Iassistant

    await test.step('#10 - Click on the \'Search Posts\' textbox', async () => {
      await page.getByRole("textbox", { name: "Search Posts", exact: true }).click();
    });

    await test.step('#11 - Enter \'visva\' in the \'Search Posts\' textbox', async () => {
      await page.getByRole("textbox", { name: "Search Posts", exact: true }).fill('visva');
    });

    await test.step('#12 - Click the close icon image', async () => {
      await page.getByRole("img", { name: "close" }).click();
    });

  }
);

