import { firstDigit } from './firstDigit';

xdescribe(firstDigit.name, () => {
    it('Test 1', () => {
        // arrange
        const inputString = 'var_1__Int';

        // act
        const response = firstDigit(inputString);

        // assert 
        expect(response).toBe('1');
    });

    it('Test 2', () => {
        // arrange
        const inputString = 'q2q-q';

        // act
        const response = firstDigit(inputString);

        // assert 
        expect(response).toBe('2');
    });

    it('Test 3', () => {
        // arrange
        const inputString = '0ss';

        // act
        const response = firstDigit(inputString);

        // assert 
        expect(response).toBe('0');
    });
});
