import { browser, logging, $, $$, by, element, ExpectedConditions as EC } from 'protractor';

describe('Test Vuejs', async () => {

  const url = 'https://vuejs.org/';

  beforeEach(async () => {
    await browser.waitForAngularEnabled(false);
  });

  it('should show Server-Side Rendering when input SSR in the search form', async () => {

  });

});
