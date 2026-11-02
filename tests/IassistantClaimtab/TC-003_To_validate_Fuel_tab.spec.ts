import { test, expect } from '@playwright/test';

test(
  'To validate Fuel tab',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-003' },
    tag: ['@QADENCE_TC_ID:TC-003'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to https://iassistant-qa.ideas2it.com/login', async () => {
      await page.goto('https://iassistant-qa.ideas2it.com/login');
    });
    //Start - Module - Login to Iassistant

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
    //End - Module - Login to Iassistant

    await test.step('#07 - Click the \'fuel (Flexi Benefit)\' link', async () => {
      await page.getByRole("link", { name: "fuel (Flexi Benefit)", exact: true }).click();
    });

    await test.step('#08 - Select option \'2025-04-01,2026-03-05\' from the year combobox containing \'2024-2025, 2025-2026, 2026-2027\'', async () => {
      await page.getByRole("combobox").filter({ hasText: "2024-20252025-20262026-2027" }).selectOption('2025-04-01,2026-03-05');
    });

    await test.step('#09 - Select option \'2026-04-01,2027-03-05\' from the year combobox containing \'2024-2025, 2025-2026, 2026-2027\'', async () => {
      await page.getByRole("combobox").filter({ hasText: "2024-20252025-20262026-2027" }).selectOption('2026-04-01,2027-03-05,,');
    });

  }
);

