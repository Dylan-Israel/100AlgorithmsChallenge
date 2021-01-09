import { matrixElementsSum } from './matrixElementsSum';

xdescribe(matrixElementsSum.name, () => {
    it('Test 1', () => {
        // arrange
        const matrix = [
            [0, 1, 1, 2],
            [0, 5, 0, 0],
            [2, 0, 3, 3]
        ];

        // act
        const response = matrixElementsSum(matrix);

        // assert 
        expect(response).toBe(9);
    });
});
