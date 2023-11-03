# sample-playwright-testing
Sample for e2e/frontend testing (used for talks) 


# Demo 

## Preparation
1. Clone https://github.com/sspringer82/wdc-next
1. Open project wdc-next
1. Start backend ```npm run backend```
1. Start frontend ```npm run dev```
1. Open ui: http://localhost:3000
1. Open project in visual studio code



## Demo flow
We already initialized playwright via ```npm init playwright@latest```

---
1. Run the tests with ```npx playwright test --headed --trace on```
1. Show results ```npx playwright show-report```
1. Show visual studio extension
1. Debug existing test


1. Record a new test
   1. Open page
   1. Click Pizza
   1. Click headline
   1. Back
   1. Add to car
   1. Open Cart
   1. CLick item in cart
   1. Buy
   1. Click thank you 
1. Add some assertions (one failing)

```` typescript
await page.goto('http://localhost:3000/list');

  await page.getByRole('link', { name: 'Pizza' }).click();
  await page.getByRole('link', { name: 'zurück zur Übersicht' }).click();

  await page.getByTestId('add-to-cart-1').click();

  await page.getByLabel('add to shopping cart').click();
  
  await expect(page.getByTestId('item-title-1')).toContainText("Pizza");

  await page.getByRole('button', { name: 'kaufen' }).click();
  await expect(page.getByRole('heading', { name: 'Danke!' })).toBeVisible();
```
