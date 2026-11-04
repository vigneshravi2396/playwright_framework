import { test, expect } from '@playwright/test';

test(
  'Iassistant- My Timesheet not able to switch the previous month',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-008' },
    tag: ['@QADENCE_TC_ID:TC-008'],
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

    await test.step('#08 - Click the \'My Timesheet\' link', async () => {
      await page.getByRole("link", { name: "My Timesheet", exact: true }).click();
    });

    await test.step('#09 - Click the \'Nov, 2026\' button', async () => {
      await page.getByRole("button", { name: "Nov, 2026", exact: true }).click();
    });

    await test.step('#10 - Click the first \'Previous Month\' image button', async () => {
      await page.getByRole("img", { name: "Previous Month", exact: true }).nth(0).click();
    });

    await test.step('#11 - Click the \'Previous Month\' image button', async () => {
      await page.getByRole("img", { name: "Previous Month", exact: true }).click();
    });

    await test.step('#12 - Click the \'Next Month\' image button', async () => {
      await page.getByRole("img", { name: "Next Month", exact: true }).click();
    });

    await test.step('#13 - Click the \'Next Month\' image button', async () => {
      await page.getByRole("img", { name: "Next Month", exact: true }).click();
    });

    await test.step('#14 - Click the \'Nov, 2026\' button', async () => {
      await page.getByRole("button", { name: "Nov, 2026", exact: true }).click();
    });

    await test.step('#15 - Select \'Choose January 2026\' option', async () => {
      await page.getByRole("option", { name: "Choose January 2026", exact: true }).click();
    });

    await test.step('#16 - Click the \'Jan, 2026\' button', async () => {
      await page.getByRole("button", { name: "Jan, 2026", exact: true }).click();
    });

    await test.step('#17 - Click the first \'Next Month\' image button', async () => {
      await page.getByRole("img", { name: "Next Month", exact: true }).nth(0).click();
    });

    await test.step('#18 - Click the first \'Next Month\' image button', async () => {
      await page.getByRole("img", { name: "Next Month", exact: true }).nth(0).click();
    });

    await test.step('#19 - Click the first \'Previous Month\' image button', async () => {
      await page.getByRole("img", { name: "Previous Month", exact: true }).nth(0).click();
    });

    await test.step('#20 - Click the first \'Previous Month\' image button', async () => {
      await page.getByRole("img", { name: "Previous Month", exact: true }).nth(0).click();
    });

    await test.step('#21 - Click the first \'Previous Month\' image button', async () => {
      await page.getByRole("img", { name: "Previous Month", exact: true }).nth(0).click();
    });

    await test.step('#22 - Click the \'Oct, 2025\' button', async () => {
      await page.getByRole("button", { name: "Oct, 2025", exact: true }).click();
    });

  }
);

