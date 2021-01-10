import { arrayReplace } from './arrayReplace';

xdescribe(arrayReplace.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [3, 5, 2, 4, 5];
        const elementToReplace = 1;
        const substitutionElement = 3;

        // act
        const response = arrayReplace(data, elementToReplace, substitutionElement);

        // assert
        expect(response).toEqual([3, 2, 3]);
    });
});
