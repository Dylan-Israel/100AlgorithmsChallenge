import { firstNotRepeatingCharacter } from './firstNotRepeatingCharacter';

xdescribe(firstNotRepeatingCharacter.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 'abacabad';

        // act
        const response = firstNotRepeatingCharacter(data);

        // assert 
        expect(response).toBe('c');
    });

    it('Test 2', () => {
        // arrange
        const data = 'abacabaabacaba';

        // act
        const response = firstNotRepeatingCharacter(data);

        // assert 
        expect(response).toBe('_');
    });
});
