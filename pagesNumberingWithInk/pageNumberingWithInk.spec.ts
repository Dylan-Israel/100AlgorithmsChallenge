import { pagesNumberingWithInk } from './pagesNumberingWithInk';

xdescribe(pagesNumberingWithInk.name, () => {
    it('Test 1', () => {
        // arrange
        const current = 21;
        const numberOfDigits = 5;

        // act
        const response = pagesNumberingWithInk(current, numberOfDigits);

        // assert 
        expect(response).toBe(22);
    });

    it('Test 2', () => {
        // arrange
        const current = 8;
        const numberOfDigits = 4;

        // act
        const response = pagesNumberingWithInk(current, numberOfDigits);

        // assert 
        expect(response).toBe(10);
    });
});
