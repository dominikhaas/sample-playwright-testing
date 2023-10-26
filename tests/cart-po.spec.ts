import { expect } from '@playwright/test';
import { test } from "./test-setup";


test('testBasicFlow', async ({ listPage, detailPage, cartPage, thankYouPage}) => {
  await listPage.goto();

  await listPage.clickItemWithText('Pizza');

  await detailPage.backToList();

  await listPage.addFirstItem();
  await listPage.openCart();

  const text = await cartPage.getTextOfCartItem(1);
  expect(text).toBe('Pizza');
  await cartPage.buy();

  await thankYouPage.assertThankYouIsDisplaye();
});