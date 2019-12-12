import { browser, by, element, $, $$, Key, logging, ExpectedConditions as EC } from 'protractor';
import { reject, async } from 'q';

describe('Captcha2', () => {

    const defaultTimeout = 5000; // ExpectedConditions's default timeout

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.ebus.com.tw/NetOrder/payOrder/addOrder.aspx');
    });

    beforeEach(async () => {
    });

    it('should valid successfully', async () => {
        await browser.wait(waitForTypingDone, 100000, '');
        const elem2 = element(by.id('SelectAddr'));
        await browser.wait(EC.elementToBeClickable(elem2), defaultTimeout,
            'Unable to find elem2 to be clickable.');
        await elem2.click();
        await element(by.id('SelectAddr')).element(by.cssContainingText('option', '高雄中正站')).click();

        const elem4 = element(by.id('SelectAddr'));
        await browser.wait(EC.elementToBeClickable(elem4), defaultTimeout,
            'Unable to find elem4 to be clickable.');
        await elem4.click();

        const elem5 = element(by.id('txtCName'));
        await browser.wait(EC.elementToBeClickable(elem5), defaultTimeout,
            'Unable to find elem5 to be clickable.');
        await elem5.click();
        await element(by.id('txtCName')).sendKeys('tony');
        await element(by.id('txtCId')).sendKeys('A131642502');

        const elem9 = element(by.id('txtCTel'));
        await browser.wait(EC.elementToBeClickable(elem9), defaultTimeout,
            'Unable to find elem9 to be clickable.');
        await elem9.click();
        await element(by.id('txtCTel')).sendKeys('0987654321');

        const elem11 = element(by.id('listGsStationId'));
        await browser.wait(EC.elementToBeClickable(elem11), defaultTimeout,
            'Unable to find elem11 to be clickable.');
        await elem11.click();
        await element(by.id('listGsStationId')).element(by.cssContainingText('option', '高雄九如站')).click();

        const elem13 = element(by.id('listGsStationId'));
        await browser.wait(EC.elementToBeClickable(elem13), defaultTimeout,
            'Unable to find elem13 to be clickable.');
        await elem13.click();

        const elem15 = element(by.id('listGeStationId'));
        await browser.wait(EC.elementToBeClickable(elem15), defaultTimeout,
            'Unable to find elem15 to be clickable.');
        await elem15.click();
        await element(by.id('listGeStationId')).element(by.cssContainingText('option', '嘉義交流道')).click();

        const elem17 = element(by.id('listGeStationId'));
        await browser.wait(EC.elementToBeClickable(elem17), defaultTimeout,
            'Unable to find elem17 to be clickable.');
        await elem17.click();

        const elem18 = element(by.id('listGDate'));
        await browser.wait(EC.elementToBeClickable(elem18), defaultTimeout,
            'Unable to find elem18 to be clickable.');
        await elem18.click();
        await element(by.id('listGDate')).element(by.cssContainingText('option', '2019/12/13（五）')).click();

        const elem20 = element(by.id('listGDate'));
        await browser.wait(EC.elementToBeClickable(elem20), defaultTimeout,
            'Unable to find elem20 to be clickable.');
        await elem20.click();

        const elem21 = element(by.id('listGTime'));
        await browser.wait(EC.elementToBeClickable(elem21), defaultTimeout,
            'Unable to find elem21 to be clickable.');
        await elem21.click();
        await element(by.id('listGTime')).element(by.cssContainingText('option', '09:00　~　12:00')).click();

        const elem23 = element(by.id('listGTime'));
        await browser.wait(EC.elementToBeClickable(elem23), defaultTimeout,
            'Unable to find elem23 to be clickable.');
        await elem23.click();

        const elem24 = element(by.id('butgBusTimeList'));
        await browser.wait(EC.elementToBeClickable(elem24), defaultTimeout,
            'Unable to find elem24 to be clickable.');
        await elem24.click();

        const url = await browser.getCurrentUrl();
        expect(url).toEqual('https://www.ebus.com.tw/NetOrder/payOrder/addOrder.aspx');
    });

    function waitForTypingDone() {
        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                element(by.name('txtChkCode')).getAttribute('value').then(val => {
                    if (val.length === 4) {
                        clearInterval(interval);
                        resolve('OK');
                    }
                });

            }, 500);
        });
    }

    afterEach(async () => {

    });

});
