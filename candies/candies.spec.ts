import { candies } from './candies';

xdescribe(candies.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 3;
        const m = 9;

        // act
        const response = candies(n, m);

        // assert
        expect(response).toBe(9);
    });
});
