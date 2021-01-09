import { sumAllPrimes } from './sumAllPrimes';

xdescribe(sumAllPrimes.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 10;

        // act
        const response = sumAllPrimes(data);

        // assert 
        expect(response).toBe(17);
    });

    it('Test 2', () => {
        // arrange
        const data = 977;

        // act
        const response = sumAllPrimes(data);

        // assert 
        expect(response).toBe(73156);
    });
});
