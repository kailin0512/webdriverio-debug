describe('Sample ebay', () => {
    it('should have ebay logo', () => {
        browser.url(`https://www.ebay.com`);
        expect($('#gh-logo')).toBeExisting();

        
    });
});

