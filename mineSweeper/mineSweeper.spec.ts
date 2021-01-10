import { minesweeper } from './minesweeper';

xdescribe(minesweeper.name, () => {
    it('Test 1', () => {
        // arrange
        const matrix = [[true, false, false],
        [false, true, false],
        [false, false, false]];

        // act
        const response = minesweeper(matrix);

        // assert 
        expect(response).toEqual([[1, 2, 1],
        [2, 1, 1],
        [1, 1, 1]]);
    });
});
