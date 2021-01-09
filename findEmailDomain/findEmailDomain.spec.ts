import { findEmailDomain } from './findEmailDomain';

xdescribe(findEmailDomain.name, () => {
    it('Test 1', () => {
        // arrange
        const address = 'prettyandsimple@example.com';

        // act
        const response = findEmailDomain(address);

        // assert 
        expect(response).toBe('example.com');
    });

    it('Test 2', () => {
        // arrange
        const address = '<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org';

        // act
        const response = findEmailDomain(address);

        // assert 
        expect(response).toBe('example.org');
    });
});
