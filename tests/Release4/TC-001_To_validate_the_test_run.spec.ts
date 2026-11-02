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

    await test.step('#03 - Enter email \'gokul.velmurugan@ideas2it.com\' in the \'Enter Ideas2IT Email\' field', async () => {
      await page.getByRole("textbox", { name: "Enter Ideas2IT Email", exact: true }).fill('gokul.velmurugan@ideas2it.com');
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

    await test.step('#07 - Click the \'+ Add Entry\' link', async () => {
      await page.locator('a:has-text("+ Add Entry")').click();
    });

    await test.step('#08 - Click on the project dropdown input field', async () => {
      await page.locator('#react-select-2-input').click();
    });

    await test.step('#09 - Select \'AllyGPO\' option from the dropdown', async () => {
      await page.getByRole("option", { name: "AllyGPO", exact: true }).click();
    });

    await test.step('#10 - Click on the \'Enter No.of.Hours\' textbox', async () => {
      await page.getByRole("textbox", { name: "Enter No.of.Hours", exact: true }).click();
    });

    await test.step('#11 - Click on the \'Enter No.of.Hours\' textbox again', async () => {
      await page.getByRole("textbox", { name: "Enter No.of.Hours", exact: true }).click();
    });

    await test.step('#12 - Enter \'8\' in the \'Enter No.of.Hours\' field', async () => {
      await page.getByRole("textbox", { name: "Enter No.of.Hours", exact: true }).fill('8');
    });

    await test.step('#13 - Click the \'Add Another Project - AllyGPO\' button', async () => {
      await page.getByRole("button", { name: "Add Another Project - AllyGPO", exact: true }).click();
    });

    await test.step('#14 - Click the second \'Remove AllyGPO\' button', async () => {
      await page.getByRole("button", { name: "Remove AllyGPO", exact: true }).nth(1).click();
    });

    await test.step('#15 - Click the \'Cancel\' button', async () => {
      await page.getByRole("button", { name: "Cancel" }).click();
    });

    await test.step('#16 - Click the \'Cancel\' button again', async () => {
      await page.getByRole("button", { name: "Cancel" }).click();
    });

    await test.step('#17 - Click the \'leave request\' link', async () => {
      await page.getByRole("link", { name: "leave request", exact: true }).click();
    });

    await test.step('#18 - Click the \'02 New Request\' button', async () => {
      await page.getByRole("button", { name: "02 New Request", exact: true }).click();
    });

    await test.step('#19 - Click the \'My Timesheet\' link', async () => {
      await page.getByRole("link", { name: "My Timesheet", exact: true }).click();
    });

    await test.step('#20 - Click the \'tickets\' link', async () => {
      await page.getByRole("link", { name: "tickets", exact: true }).click();
    });

    await test.step('#21 - Click the header dropdown container', async () => {
      await page.locator('#headerDropDownContainer').click();
    });

    await test.step('#22 - Click the \'Profile\' link', async () => {
      await page.getByRole("link", { name: "Profile", exact: true }).click();
    });

    await test.step('#23 - Click the \'devero mobile\' heading', async () => {
      await page.getByRole("heading", { name: "devero mobile", exact: true }).click();
    });

    await test.step('#24 - Click the \'home\' link', async () => {
      await page.getByRole("link", { name: "home", exact: true }).click();
    });

    await test.step('#25 - Click the \'My Timesheet\' link', async () => {
      await page.getByRole("link", { name: "My Timesheet", exact: true }).click();
    });

    await test.step('#26 - Click the header dropdown container', async () => {
      await page.locator('#headerDropDownContainer').click();
    });

    await test.step('#27 - Click the \'home\' link', async () => {
      await page.getByRole("link", { name: "home", exact: true }).click();
    });

  }
);

