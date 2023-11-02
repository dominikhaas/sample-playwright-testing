# sample-playwright-testing
Sample for e2e/frontend testing (used for talks) 


# Demo 

## Preparation
1. Clone https://github.com/sspringer82/wdc-next
1. Open project wdc-next
1. Start backend ```cd ../wdc-next && npm run backend```
1. Start frontend ```cd ../wdc-next && npm run dev```
1. Optional: Open project in visual studio code ```code ../wdc-next```
1. Open ui: http://localhost:3000

## Part 1 - Getting started & tools
We alredy initialized playwright via ```npm init playwright@latest```


---
1. Run the tests with ```npx playwright test --headed --trace on```
1. Show results ```npx playwright show-report```
1. Show visual studio extension
1. Debug existing test



1. Record a new test
- Open page
- Click Pizza
- Click headline
- Back
- Add to car
- Open Cart
- CLick item in cart
- Buy
- Click thank you 



```` typescript
test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/list');

  await page.getByRole('link', { name: 'Pizza' }).click();
  await page.getByRole('link', { name: 'zurück zur Übersicht' }).click();
  await page.getByTestId('container').locator('div').filter({ hasText: 'Pizza9.99hinzufügen' }).getByRole('button').click();
  

  await page.getByLabel('add to shopping cart').click();

  await page.getByRole('button', { name: 'kaufen' }).click();
  await expect(await page.getByRole('heading', { name: 'Danke!' })).toBeVisible();
});
```


1. Run test
