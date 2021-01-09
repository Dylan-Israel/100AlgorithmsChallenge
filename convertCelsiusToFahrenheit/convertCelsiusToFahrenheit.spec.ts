import { celsiusToFahrenheit } from './convertCelsiusToFahrenheit';

xdescribe(celsiusToFahrenheit.name, () => {
    it('Test 1', () => {
        // arrange
        const data = -30;

        // act
        const response = celsiusToFahrenheit(data);

        // assert 
        expect(response).toBe(-22);
    });

    it('Test 2', () => {
        // arrange
        const data = -10;

        // act
        const response = celsiusToFahrenheit(data);

        // assert 
        expect(response).toBe(14);
    });

    it('Test 3', () => {
        // arrange
        const data = 0;

        // act
        const response = celsiusToFahrenheit(data);

        // assert 
        expect(response).toBe(32);
    });
});
