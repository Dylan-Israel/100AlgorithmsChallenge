import { chessBoardCellColor } from './chessBoardCellColor';

xdescribe(chessBoardCellColor.name, () => {
    it('Test 1', () => {
        // arrange
        const cell1 = 'A1';
        const cell2 = 'C3';

        // act
        const response = chessBoardCellColor(cell1, cell2);

        // assert
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        // arrange
        const cell1 = 'A1';
        const cell2 = 'H3';

        // act
        const response = chessBoardCellColor(cell1, cell2);

        // assert
        expect(response).toBe(false);
    });
});
