import { browser, by, element, $, $$, ExpectedConditions as EC, logging } from 'protractor';

describe('the user does search on angular.io', () => {
    it('should show ngzone', async () => {
        await browser.get('https://angular.io/');
        await element(by.css('aio-search-box > input[type="search"]')).sendKeys('ngzone');
        await browser.wait(EC.presenceOf(element(by.css('body > aio-shell > aio-search-results > div > div:nth-child(2)'))), 5000);

        await element(by.css('body > aio-shell > aio-search-results > div > div:nth-child(2) > ul.priority-pages > li:nth-child(1) > a')).click();
        const text = await browser.getCurrentUrl();
        expect(text).toEqual('https://angular.io/api/core/NgZone');
    });
});
