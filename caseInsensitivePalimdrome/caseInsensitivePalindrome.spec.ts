import { isCaseInsensitivePalindrome } from './caseInsensitivePalindrome';

xdescribe(isCaseInsensitivePalindrome.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'AaBaa';

        // act
        const response = isCaseInsensitivePalindrome(data);

        // assert
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        // arrange
        const data = 'abac';

        // act
        const response = isCaseInsensitivePalindrome(data);

        // assert
        expect(response).toBe(false);
    });
});
