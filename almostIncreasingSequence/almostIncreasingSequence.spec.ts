import { almostIncreasingSequence } from './almostIncreasingSequence';

xdescribe(almostIncreasingSequence.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [1, 3, 2, 1];

        // act
        const response = almostIncreasingSequence(data);

        // assert
        expect(response).toBe(false);
    });

    it('Test 2', () => {
        // arrange
        const data = [1, 3, 2];

        // act
        const response = almostIncreasingSequence(data);

        // assert
        expect(response).toBe(true);
    });
});
