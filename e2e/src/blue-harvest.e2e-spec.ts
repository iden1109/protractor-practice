import { browser, by, element, $, $$, Key, logging, ExpectedConditions as EC } from 'protractor';
import { compareScreenshot } from 'blue-harvest';

describe('Google layout varify', () => {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.google.com/');
    });

    it('should compare pages', async () => {
      await browser.waitForAngularEnabled(false);
      await browser.manage().window().setSize(1366, 1024);

      const golden  = 'goldens/home.png';
      const diffDir = 'goldens/'; // diff-home.png
      await browser.waitForAngular(); // MUST wait before take a screenshot
      const actual = await browser.takeScreenshot(); // with scrollbar, won't wait Angular stable
      //const actual = await element(by.tagName('body')).takeScreenshot(); // no scrollbar, wait Angular stable

      const result = await compareScreenshot(actual, golden, diffDir);
      expect(result).toBeTruthy();
    });

    it('should write your code here', async () => {

    });

});
