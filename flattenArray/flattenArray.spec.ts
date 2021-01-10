import { flattenArray } from './flattenArray';

xdescribe(flattenArray.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [[["a"]], [["b"]]];

        // act
        const response = flattenArray(data);

        // assert 
        expect(response).toEqual(["a", "b"]);
    });

    it('Test 2', () => {
        // arrange
        const data = [1, [2], [3, [[4]]]];

        // act
        const response = flattenArray(data);

        // assert 
        expect(response).toEqual([1, 2, 3, 4]);
    });
});
