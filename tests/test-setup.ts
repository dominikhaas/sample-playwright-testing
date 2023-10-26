import {Page, test as base, expect} from "@playwright/test";

export class ListPage {
    constructor(private readonly page: Page) {
    }

    public async goto(): Promise<void> {
        await this.page.goto('http://localhost:3000');
    }

    public async addFirstItem(): Promise<void> {
        await this.page.getByTestId('add-to-cart-1').click();
    }

    public async clickItemWithText(text: string): Promise<void> {
        await this.page.getByRole('link', { name: text }).click();
    }

    public async openCart(): Promise<void> {
        await this.page.getByLabel('add to shopping cart').click();
    }
    
}

export class DetailPage {
    constructor(private readonly page: Page) {
    }

    public async backToList(): Promise<void> {
        await this.page.getByRole('link', { name: 'zurück zur Übersicht' }).click();
    }
}


export class CartPage {
    constructor(private readonly page: Page) {
    }

    public async getTextOfCartItem(index:Number): Promise<string | null> {
        return this.page.getByTestId('item-title-' + index).textContent();
    }

    public async buy(): Promise<void> {
        await this.page.getByRole('button', { name: 'kaufen' }).click();
    }
}
export class ThankYouPage {
    constructor(private readonly page: Page) {
    }

    public async assertThankYouIsDisplaye(): Promise<void> {
        await expect(this.page.getByRole('heading', { name: 'Danke!' })).toBeVisible();
    }

}



type MyFixtures = {
    listPage: ListPage,
    detailPage: DetailPage,
    cartPage: CartPage,
    thankYouPage: ThankYouPage
}

export const test = base.extend<MyFixtures>({
    listPage: async({page}, use) => {
        const listPage = new ListPage(page);
        use(listPage)
    },
    detailPage: async({page}, use) => {
        const detailPage = new DetailPage(page);
        use(detailPage)
    },
    cartPage: async({page}, use) => {
        const cartPage = new CartPage(page);
        use(cartPage)
    },
    thankYouPage: async({page}, use) => {
        const thankYouPage = new ThankYouPage(page);
        use(thankYouPage)
    }
})
