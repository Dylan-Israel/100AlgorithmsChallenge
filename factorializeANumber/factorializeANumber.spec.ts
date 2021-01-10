import { factorializeANumber } from './factorializeANumber';

xdescribe(factorializeANumber.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 5;

        // act
        const response = factorializeANumber(data);

        // assert 
        expect(response).toBe(120);
    });

    it('Test 2', () => {
        // arrange
        const data = 10;

        // act
        const response = factorializeANumber(data);

        // assert 
        expect(response).toBe(3628800);
    });
});
