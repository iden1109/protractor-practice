import { browser, by, element, $, $$, Key, logging, ExpectedConditions as EC } from 'protractor';

describe('New activities', () => {

    const defaultTimeout = 5000; // ExpectedConditions's default timeout

    beforeAll(async () => {
        await browser.get('https://angular-e2e-demo.firebaseapp.com/');
    });

    it('should go to google', async () => {
        const googleBtn = element(by.id('idGoGooglebutton'));
        await browser.wait(EC.elementToBeClickable(googleBtn), defaultTimeout, 'Unable to find googleBtn to be clickable.');
        await googleBtn.click();
        await browser.switchTo().alert().accept();

        await browser.waitForAngularEnabled(false);
        const url = await browser.getCurrentUrl();

        expect(url).toEqual('https://www.google.com/');

        element(by.css('button.myclass')).click();
    });

    it('should write your code here', async () => {

    });
});
