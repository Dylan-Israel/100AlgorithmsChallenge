import { newNumeralSystem } from './newNumeralSystem';

xdescribe(newNumeralSystem.name, () => {
    it('Test 1', () => {
        // arrange
        const number = 'G';

        // act
        const response = newNumeralSystem(number);

        // assert 
        expect(response).toEqual(["A + G", "B + F", "C + E", "D + D"]);
    });
});
