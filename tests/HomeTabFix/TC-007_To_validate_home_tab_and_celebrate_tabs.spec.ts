import { test, expect } from '@playwright/test';

test(
  'To validate home tab and celebrate tabs',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-007' },
    tag: ['@QADENCE_TC_ID:TC-007'],
  },
  async ({ page, request }) => {


    await test.step('#01 - Navigate to https://iassistant-qa.ideas2it.com/login', async () => {
      await page.goto('https://iassistant-qa.ideas2it.com/login');
    });
    //Start - Module - Api_random_number
    let num: any;


    await test.step('#02 - https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new', async () => {
      const apiResponse2 = await request.fetch('https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=1', {
        method: 'GET',
      });
      const apiResponse2Body = await apiResponse2.json();
      expect(apiResponse2.status()).toBe(200);
      num = apiResponse2Body[0];
    });
    //End - Module - Api_random_number
    //Start - Module - Login to Iassistant

    await test.step('#03 - Click on the \'Enter Ideas2IT Email\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).click();
    });

    await test.step('#04 - Enter email \'yogeshwar.sankaralingam@ideas2it.com\' in the \'Enter Ideas2IT Email\' field', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).fill('yogeshwar.sankaralingam@ideas2it.com');
    });

    await test.step('#05 - Click on the \'Enter the password\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the password", exact: true }).click();
    });

    await test.step('#06 - Enter password \'Popular@123\' in the \'Enter the password\' field', async () => {
      await page.getByRole("textbox", { name: "Enter the password", exact: true }).fill('Popular@123');
    });

    await test.step('#07 - Click the \'Login\' button', async () => {
      await page.getByRole("button", { name: "Login", exact: true }).click();
    });
    //End - Module - Login to Iassistant

    await test.step('#08 - Click on the \'Celebrations\' menu item', async () => {
      await page.locator('xpath=//div[normalize-space()="Celebrations"]').click();
    });

    await test.step('#09 - Click on the first element with class \'flex.gap-2.items-center\'', async () => {
      await page.locator('div.flex.gap-2.items-center').nth(0).click();
    });

    await test.step('#10 - Click the \'My Team\' button', async () => {
      await page.getByRole("button", { name: "My Team", exact: true }).click();
    });

    await test.step('#11 - Click the \'All Employees\' button', async () => {
      await page.getByRole("button", { name: "All Employees", exact: true }).click();
    });

    await test.step('#12 - Click on the \'Celebrations\' menu item', async () => {
      await page.locator('xpath=//div[normalize-space()="Celebrations"]').click();
    });

    await test.step('#13 - Click on the first element with class \'flex.gap-2.items-center\'', async () => {
      await page.locator('div.flex.gap-2.items-center').nth(0).click();
    });

    await test.step('#14 - Click on the \'Celebrations\' menu item', async () => {
      await page.locator('xpath=//div[normalize-space()="Celebrations"]').click();
    });

    await test.step('#15 - Click on the first element with class \'flex.gap-2.items-center\'', async () => {
      await page.locator('div.flex.gap-2.items-center').nth(0).click();
    });

  }
);

