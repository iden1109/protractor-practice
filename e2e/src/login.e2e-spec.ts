import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

describe('try to login github', () => {

  it('should login with account and passowrd', () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://github.com/login');
    element(by.id('login_field')).sendKeys('idenliu');
    element(by.id('password')).sendKeys('microng0g0g0');
    element(by.buttonText('Sign in')).click();
    expect(element(by.linkText('New')).isPresent()).toBe(true);
  });

});
