import { squareDigitsSequence } from './squareDigitsSequence';

xdescribe(squareDigitsSequence.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 16;

        // act
        const response = squareDigitsSequence(data);

        // assert 
        expect(response).toBe(9);
    });

    it('Test 2', () => {
        // arrange
        const data = 103;

        // act
        const response = squareDigitsSequence(data);

        // assert 
        expect(response).toBe(4);
    });
});
