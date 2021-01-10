import { integerToStringOfFixedWidth } from './integerToStringOfFixedWidth';

xdescribe(integerToStringOfFixedWidth.name, () => {
    it('Test 1', () => {
        // arrange
        const number = 1234;
        const width = 2;

        // act
        const response = integerToStringOfFixedWidth(number, width);

        // assert 
        expect(response).toBe('34');
    });

    it('Test 2', () => {
        // arrange
        const number = 1234;
        const width = 4;

        // act
        const response = integerToStringOfFixedWidth(number, width);

        // assert 
        expect(response).toBe('1234');
    });

    it('Test 3', () => {
        // arrange
        const number = 1234;
        const width = 4;

        // act
        const response = integerToStringOfFixedWidth(number, width);

        // assert 
        expect(response).toBe('01234');
    });
});
