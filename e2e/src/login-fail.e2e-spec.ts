import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

describe('try to login github fail', () => {

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    // browser.get('https://github.com/');
  });

  it('should connect github', () => {
    expect(browser.getCurrentUrl()).toContain('github.com');
  });

  fit('should login fail', () => {
    browser.get('/login');
    element(by.name('login')).sendKeys('idenliu');
    element(by.id('password')).sendKeys('micron');
    element(by.buttonText('Sign in')).click();
    expect(element(by.className('container')).getText()).toEqual('Incorrect username or password');
  });

  it('should login with right account and passowrd', () => {
    browser.get('/login');
    element(by.id('login_field')).sendKeys('idenliu');
    element(by.id('password')).sendKeys('microng0g0g0');
    element(by.buttonText('Sign in')).click();
    expect(browser.getCurrentUrl()).toContain('account/unverified-email');
  });

});
