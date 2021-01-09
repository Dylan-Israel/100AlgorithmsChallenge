import { characterParity } from './characterParity';

xdescribe(characterParity.name, () => {
    it('Test 1', () => {
        // arrange
        const data = '5';

        // act
        const response = characterParity(data);

        // assert
        expect(response).toBe('odd');
    });

    it('Test 2', () => {
        // arrange
        const data = '8';

        // act
        const response = characterParity(data);

        // assert
        expect(response).toBe('even');
    });

    it('Test 3', () => {
        // arrange
        const data = 'q';

        // act
        const response = characterParity(data);

        // assert
        expect(response).toBe('not a digit');
    });
});
