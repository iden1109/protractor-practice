import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

describe('try to login github fail', async () => {

  beforeEach(async () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://github.com/login');
  });

  it('should connect github', async () => {
    await expect(browser.getCurrentUrl()).toContain('github.com');
  });

  it('should login fail', async () => {

  });

});
