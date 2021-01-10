import { boxBlur } from './boxBlur';

xdescribe(boxBlur.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [[1, 1, 1],
        [1, 7, 1],
        [1, 1, 1]];

        // act
        const response = boxBlur(data);

        // assert
        expect(response).toEqual([[1]]);
    });
});
