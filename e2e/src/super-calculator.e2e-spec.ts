import { browser, by, element, $, $$, ExpectedConditions as EC } from 'protractor';

describe('Test Super Calculator', () => {
  let first = element(by.model('first'));
  let second = element(by.model('second'));
  let operator = element(by.model('operator'));
  let goButton = element(by.id('gobutton'));
  let lastResult = element(by.binding('latest'));

  beforeEach(async () => {
    await browser.waitForAngularEnabled(true);
    await browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', async () => {
    expect(await browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add two numbers one and two', async () => {
    await first.sendKeys(1);
    await second.sendKeys(2);
    await goButton.click();
    expect(await lastResult.getText()).toEqual('3');
  });

  it('should add two nunmbers four and six', async () => {
    await first.sendKeys(4);
    await second.sendKeys(6);
    await goButton.click();
    expect(await lastResult.getText()).toEqual('10');
  });

  it('should read the value from an input', async () => {
    await first.sendKeys(1);
    expect(await first.getAttribute('value')).toEqual('1');
  });

});
