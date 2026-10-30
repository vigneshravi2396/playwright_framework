import { test, expect } from '@playwright/test';

test(
  'To validate the test run',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-001' },
    tag: ['@QADENCE_TC_ID:TC-001'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to https://iassistant-qa.ideas2it.com/timesheet', async () => {
      await page.goto('https://iassistant-qa.ideas2it.com/timesheet');
    });

    await test.step('#02 - Click on the \'Enter Ideas2IT Email\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).click();
    });

    await test.step('#03 - Enter email \'yogeshwar.sankaralingam@ideas2it.com\' in the \'Enter Ideas2IT Email\' field', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).fill('yogeshwar.sankaralingam@ideas2it.com');
    });

    await test.step('#04 - Click on the \'Enter the password\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter the password", exact: true }).click();
    });

    await test.step('#05 - Enter password \'Popular@123\' in the \'Enter the password\' field', async () => {
      await page.getByRole("textbox", { name: "Enter the password", exact: true }).fill('Popular@123');
    });

    await test.step('#06 - Click the \'Login\' button', async () => {
      await page.getByRole("button", { name: "Login", exact: true }).click();
    });

  }
);

