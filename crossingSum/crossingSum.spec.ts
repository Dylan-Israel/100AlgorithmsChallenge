import { crossingSum } from './crossingSum';

xdescribe(crossingSum.name, () => {
    it('Test 1', () => {
        // arrange
        const matrix = [[1, 1, 1, 1],
        [2, 2, 2, 2],
        [3, 3, 3, 3]];
        const a = 1;
        const b = 3;

        // act
        const response = crossingSum(matrix, a, b);

        // assert 
        expect(response).toBe(true);
    });
});
