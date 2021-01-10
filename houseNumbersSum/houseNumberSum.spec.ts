import { houseNumbersSum } from './houseNumbersSum';

xdescribe(houseNumbersSum.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [5, 1, 2, 3, 0, 1, 5, 0, 2];

        // act
        const response = houseNumbersSum(data);

        // assert 
        expect(response).toBe(10);
    });
});
