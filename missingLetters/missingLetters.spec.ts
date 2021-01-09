import { missingLetters } from './missingLetters';

xdescribe(missingLetters.name, () => {
    it('Test 1', () => {
        // arrange
        const data = "abce";

        // act
        const response = missingLetters(data);

        // assert 
        expect(response).toBe("d");
    });

    it('Test 2', () => {
        // arrange
        const data = "abcdefghjklmno";

        // act
        const response = missingLetters(data);

        // assert 
        expect(response).toBe("i");
    });

    it('Test 3', () => {
        // arrange
        const data = "abcdefghijklmnopqrstuvwxyz";

        // act
        const response = missingLetters(data);

        // assert 
        expect(response).toBe(undefined);
    });
});
