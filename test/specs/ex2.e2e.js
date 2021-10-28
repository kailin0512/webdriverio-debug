const { setupBrowser } = require('@testing-library/webdriverio');
describe('Sample ebay', () => {
    it('should have ebay logo', () => {
        browser.url(`https://www.ebay.com`);
        setupBrowser(browser);
        const element = browser.getByRole('button', {
            name: /search/i
          });
        // expect($('#gh-logo')).toBeExisting();
        expect(element).toBeExisting();

        
    });
});

