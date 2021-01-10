import { domainType } from './domainType';

xdescribe(domainType.name, () => {
    it('Test 1', () => {
        // arrange
        const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];

        // act
        const response = domainType(domains);

        // assert 
        expect(response).toEqual(["organization", "commercial", "network", "information"]);
    });
});
