import { arrayPreviousLess } from './arrayPreviousLess';

xdescribe(arrayPreviousLess.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [3, 5, 2, 4, 5];

        // act
        const response = arrayPreviousLess(data);

        // assert
        expect(response).toEqual([-1, 3, -1, 2, 4]);
    });
});
