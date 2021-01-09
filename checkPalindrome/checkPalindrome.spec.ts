import { checkPalindrome } from './checkPalindrome';

xdescribe(checkPalindrome.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'aabaa';

        // act
        const response = checkPalindrome(data);

        // assert
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        // arrange
        const data = 'abac';

        // act
        const response = checkPalindrome(data);

        // assert
        expect(response).toBe(false);
    });

    it('Test 3', () => {
        // arrange
        const data = 'a';

        // act
        const response = checkPalindrome(data);

        // assert
        expect(response).toBe(true);
    });
});
