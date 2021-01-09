import { sumOddFibonacciNums } from './sumOddFibonacciNums';

xdescribe(sumOddFibonacciNums.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 10;

        // act
        const response = sumOddFibonacciNums(data);

        // assert 
        expect(response).toBe(10);
    });

    it('Test 2', () => {
        // arrange
        const data = 1000;

        // act
        const response = sumOddFibonacciNums(data);

        // assert 
        expect(response).toBe(1785);
    });

    it('Test 3', () => {
        // arrange
        const data = 4000000;

        // act
        const response = sumOddFibonacciNums(data);

        // assert 
        expect(response).toBe(4613732);
    });
});
