import { mostFrequentDigitSum } from './mostFrequentDigitSum';

xdescribe(mostFrequentDigitSum.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 88;

        // act
        const response = mostFrequentDigitSum(data);

        // assert 
        expect(response).toBe(9);
    });

    it('Test 2', () => {
        // arrange
        const data = 8;

        // act
        const response = mostFrequentDigitSum(data);

        // assert 
        expect(response).toBe(8);
    });
});
