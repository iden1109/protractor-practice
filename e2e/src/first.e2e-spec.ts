import { browser, logging, $, $$, by, element, ExpectedConditions as EC } from 'protractor';

describe('Protractor first test', () => {

  beforeEach(async () => {
    await browser.waitForAngularEnabled(true);
      browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', async () => {
      expect(browser.getTitle()).toEqual('Super Calculator');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  });
});
