import { encloseInBrackets } from './encloseInBrackets';

xdescribe(encloseInBrackets.name, () => {
    it('Test 1', () => {
        // arrange
        const inputString = 'abacaba';

        // act
        const response = encloseInBrackets(inputString);

        // assert 
        expect(response).toBe('(abacaba)');
    });
});
