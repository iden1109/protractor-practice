import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

describe('try to login github fail', async () => {

  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://github.com/login');
  });

  it('should connect github', async () => {
    await expect(browser.getCurrentUrl()).toContain('github.com');
  });

  it('should login fail', async () => {
    await element(by.name('login')).sendKeys('idenliu');
    await element(by.id('password')).sendKeys('micron');
    await element(by.buttonText('Sign in')).click();
    expect(await element(by.cssContainingText('.container', 'Incorrect username or password')).isPresent()).toBeTruthy();
  });

});
