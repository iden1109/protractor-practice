import { browser, by, element, $, $$, Key, logging, ExpectedConditions as EC } from 'protractor';

describe('Radio Buttons', () => {

    const defaultTimeout = 5000; // ExpectedConditions's default timeout

    beforeAll(async () => {
        await browser.get('https://angular-e2e-demo.firebaseapp.com/');
    });

    beforeEach(async () => {
    });

    it('should be selected', async () => {
        const elem2 = element.all(by.tagName('p-radiobutton')).first().element(by.tagName('span'));
        await browser.wait(EC.elementToBeClickable(elem2), defaultTimeout,
            'Unable to find elem2 to be clickable.');
        await elem2.click();

        const rbValue = await element(by.id('idRbValue')).getText();
        expect(rbValue).toEqual('Option 1');
    });

    afterEach(async () => {
    });

});
