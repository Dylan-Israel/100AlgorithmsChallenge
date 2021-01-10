import { commonCharacterCount } from './commonCharacterCount';

xdescribe(commonCharacterCount.name, () => {
    it('Test 1', () => {
        // arrange
        const s1 = 'aabcc';
        const s2 = 'adcaa';

        // act
        const response = commonCharacterCount(s1, s2);

        // assert
        expect(response).toBe(3);
    });
});
