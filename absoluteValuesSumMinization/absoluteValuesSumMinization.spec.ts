import { absoluteValuesSumMinimization } from './absoluteValuesSumMinization';

xdescribe(absoluteValuesSumMinimization.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [2, 4, 7];

        // act
        const response = absoluteValuesSumMinimization(data);

        // assert
        expect(response).toBe(4);
    });

    it('Test 2', () => {
        // arrange
        const data = [2, 4, 7, 6];

        // act
        const response = absoluteValuesSumMinimization(data);

        // assert
        expect(response).toBe(4);
    });

    it('Test 3', () => {
        // arrange
        const data = [2, 4, 7, 6, 6];

        // act
        const response = absoluteValuesSumMinimization(data);

        // assert
        expect(response).toBe(7);
    });

    it('Test 4', () => {
        // arrange
        const data = [2, 4, 7, 6, 6, 8];

        // act
        const response = absoluteValuesSumMinimization(data);

        // assert
        expect(response).toBe(7);
    });
});
