import { extractMatrixColumn } from './extractMatrixColumn';

xdescribe(extractMatrixColumn.name, () => {
    it('Test 1', () => {
        // arrange
        const matrix = [
            [1, 1, 1, 2],
            [0, 5, 0, 4],
            [2, 1, 3, 6]
        ];
        const column = 2;

        // act
        const response = extractMatrixColumn(matrix, column);

        // assert 
        expect(response).toEqual([1, 0, 3]);
    });
});
