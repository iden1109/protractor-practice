import { browser, by, element, $, $$, Key, logging, ExpectedConditions as EC } from 'protractor';

fdescribe('the user submit a questionnaire', () => {

  it('should type information', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('/questionnaire');
    await element(by.id('search-input')).sendKeys('button');
    await element(by.name('codeLanguage')).sendKeys('javascript');
    await element(by.buttonText('送出')).click();
    const formText = await element(by.tagName('form')).getText();
    await browser.waitForAngularEnabled(true);
    expect(formText).toContain('送出成功');
  });

});
