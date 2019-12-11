import { browser, by, element, $, $$, Key, logging, ExpectedConditions as EC } from 'protractor';

describe('New activities', () => {

    const defaultTimeout = 5000; // ExpectedConditions's default timeout

    beforeAll(async () => {
        await browser.get('https://angular-e2e-demo.firebaseapp.com/');
    });

    beforeEach(async () => {
    });

    it('should go to google', async () => {

        const elem2 = element(by.id('idGoGooglebutton'));
        await browser.wait(EC.elementToBeClickable(elem2), defaultTimeout,
            'Unable to find elem2 to be clickable.');
        await elem2.click();
        await browser.switchTo().alert().accept();

        await browser.waitForAngularEnabled(false);
        const url = await browser.getCurrentUrl();

        expect(url).toEqual('https://www.google.com/');
    });

    afterEach(async () => {

    });

});
