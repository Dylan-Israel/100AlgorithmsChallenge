import { arrayMaximalAdjacentDifference } from './arrayMaximalAdjacentDifference';

xdescribe(arrayMaximalAdjacentDifference.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [2, 4, 1, 0];

        // act
        const response = arrayMaximalAdjacentDifference(data);

        // assert
        expect(response).toBe(3);
    });

    it('Test 2', () => {
        // arrange
        const data = [2, 9, 1, 0];

        // act
        const response = arrayMaximalAdjacentDifference(data);

        // assert
        expect(response).toBe(8);
    });
});
