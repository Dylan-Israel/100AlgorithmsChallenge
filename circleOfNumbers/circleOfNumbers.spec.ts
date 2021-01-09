import { circleOfNumbers } from './circleOfNumbers';

xdescribe(circleOfNumbers.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 10;
        const firstNumber = 2;

        // act
        const response = circleOfNumbers(n, firstNumber);

        // assert
        expect(response).toBe(7);
    });
});
