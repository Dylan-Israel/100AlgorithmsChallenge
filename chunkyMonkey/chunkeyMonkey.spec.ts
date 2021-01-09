import { chunkyMonkey } from './chunkyMonkey';

xdescribe(chunkyMonkey.name, () => {
    it('Test 1', () => {
        // arrange
        const data = ['a', 'b', 'c', 'd'];
        const length = 2;

        // act
        const response = chunkyMonkey(data, length);

        // assert
        expect(response).toEqual([["a", "b"], ["c", "d"]]);
    });

    it('Test 2', () => {
        // arrange
        const data = [0, 1, 2, 3, 4, 5];
        const length = 4;

        // act
        const response = chunkyMonkey(data, length);

        // assert
        expect(response).toEqual([[0, 1, 2, 3], [4, 5]]);
    });
});
