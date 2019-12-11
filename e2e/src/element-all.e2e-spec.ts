import { browser, by, element, $, $$, Key, logging, ExpectedConditions as EC } from 'protractor';

fdescribe('Fibonacci', () => {

    const defaultTimeout = 5000; // ExpectedConditions's default timeout

    beforeAll(async () => {
        // await browser.waitForAngularEnabled(false);
        // await browser.manage().window().setSize(1024, 768);
        await browser.get('https://angular-e2e-demo.firebaseapp.com/');
    });

    beforeEach(async () => {
    });

    it('should display numbers', async () => {
        const elem2 = element(by.id('idFibonacciLevel'));
        await element(by.id('idFibonacciLevel')).sendKeys('6');

        const elem4 = element(by.id('idFibonacciButton'));
        await browser.wait(EC.elementToBeClickable(elem4), defaultTimeout,
            'Unable to find elem4 to be clickable.');
        await elem4.click();

        const collections = await element.all(by.id('idCollections')).count();
        expect(collections).toEqual(6);
    });

    it('third number should be 2', async () => {
        const thirdNumberText = await element.all(by.id('idCollections')).get(2).element(by.tagName('h4')).getText();

        expect('2').toEqual(thirdNumberText);
    });

    afterEach(async () => {

    });

});
