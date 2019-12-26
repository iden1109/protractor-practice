import { browser, by, element, $, $$, Key, logging, ExpectedConditions as EC } from 'protractor';
import { compareScreenshot, addMask, removeMask } from 'blue-harvest';

describe('Google layout varify', () => {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.google.com/');
    });

    it('should write your code here', async () => {

    });

    it('should compare pages with mask', async () => {
      await browser.waitForAngularEnabled(false);
      await browser.manage().window().setSize(1366, 1024);

      const golden  = 'goldens/golden_mask.png';
      const diffDir = 'goldens/'; // diff-golden_mask.png
      await browser.waitForAngular(); // MUST wait before take a screenshot

      const mask = element(by.name('q'));
      await addMask(mask, 'gray');

      const actual = await browser.takeScreenshot();
      removeMask(mask);

      const result = await compareScreenshot(actual, golden, diffDir);
      expect(result).toBeTruthy();
    });
});
