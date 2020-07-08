import { browser, logging, $, $$, by, element, ExpectedConditions as EC } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Test Vuejs', async () => {

  const url = 'https://vuejs.org/';

  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get(url).catch((error) => console.log(error));
  });

  it('should show Server-Side Rendering when input SSR in the search form', async () => {
    const searchNav = element(by.id('search-query-nav'));
    if (await searchNav.isPresent()) {
      await searchNav.sendKeys('ssr');
      await browser.sleep(500);
    }

    const serverSideRendering = element.all(by.className('algolia-docsearch-suggestion--subcategory-column-text')).first();
    const text = await serverSideRendering.getText();
    await browser.sleep(500);
    expect(text).toEqual('Packaging Vue Components for npm');
  });

});
