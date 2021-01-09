import { longestDigitsPrefix } from './longestDigitsPrefix';

xdescribe(longestDigitsPrefix.name, () => {
    it('Test 1', () => {
        // arrange
        const data = '123aa1';

        // act
        const response = longestDigitsPrefix(data);

        // assert 
        expect(response).toBe('123');
    });
});
