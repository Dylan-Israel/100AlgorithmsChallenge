import { properNounCorrection } from './properNounCorrection';

xdescribe(properNounCorrection.name, () => {
    it('Test 1', () => {
        // arrange
        const noun = 'pARiS'

        // act
        const response = properNounCorrection(noun);

        // assert 
        expect(response).toBe('Paris');
    });

    it('Test 2', () => {
        // arrange
        const noun = 'John'

        // act
        const response = properNounCorrection(noun);

        // assert 
        expect(response).toBe('John');
    });
});
