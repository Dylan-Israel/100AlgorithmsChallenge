import { minimalNumberOfCoins } from './minimalNumberOfCoins';

xdescribe(minimalNumberOfCoins.name, () => {
    it('Test 1', () => {
        // arrange
        const coins = [1, 2, 10];
        const price = 28;

        // act
        const response = minimalNumberOfCoins(coins, price);

        // assert 
        expect(response).toBe(6);
    });
});
