import { depositProfit } from './depositProfit';

xdescribe(depositProfit.name, () => {
    it('Test 1', () => {
        // arrange
        const deposit = 100;
        const rate = 20;
        const threshold = 170;

        // act
        const response = depositProfit(deposit, rate, threshold);

        // assert 
        expect(response).toBe(3);
    });
});
