import { seatsInTheater } from './seatsInTheater';

xdescribe(seatsInTheater.name, () => {
    it('Test 1', () => {
        // arrange
        const nCols = 16;
        const nRows = 11;
        const col = 5;
        const row = 3;

        // act
        const response = seatsInTheater(nCols, nRows, col, row);

        // assert 
        expect(response).toBe(96);
    });
});
