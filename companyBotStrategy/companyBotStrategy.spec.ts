import { companyBotStrategy } from './companyBotStrategy';

xdescribe(companyBotStrategy.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [[3, 1], [6, 1], [4, 1], [5, 1]];

        // act
        const response = companyBotStrategy(data);

        // assert
        expect(response).toBe(4.5);
    });

    it('Test 2', () => {
        // arrange
        const data = [[4, 1], [4, -1], [0, 0], [6, 1]];

        // act
        const response = companyBotStrategy(data);

        // assert
        expect(response).toBe(5.0);
    });

    it('Test 3', () => {
        // arrange
        const data = [[4, -1], [0, 0], [5, -1]];

        // act
        const response = companyBotStrategy(data);

        // assert
        expect(response).toBe(0);
    });
});
