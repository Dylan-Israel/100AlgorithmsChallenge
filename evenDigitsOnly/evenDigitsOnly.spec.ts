import { evenDigitsOnly } from './evenDigitsOnly';

xdescribe(evenDigitsOnly.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 248622;

        // act
        const response = evenDigitsOnly(n);

        // assert 
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        // arrange
        const n = 642386;

        // act
        const response = evenDigitsOnly(n);

        // assert 
        expect(response).toBe(false);
    });
});
