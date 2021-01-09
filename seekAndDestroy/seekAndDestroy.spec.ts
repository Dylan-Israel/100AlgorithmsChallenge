import { seekAndDestroy } from './seekAndDestroy';

xdescribe(seekAndDestroy.name, () => {
    it('Test 1', () => {
        // arrange
        const data1 = [3, 5, 1, 2, 2];
        const data2 = [2, 3, 5];

        // act
        const response = seekAndDestroy(data1, data2);

        // assert 
        expect(response).toEqual([1]);
    });

    it('Test 2', () => {
        // arrange
        const data1 = [1, 2, 3, 5, 1, 2, 3];
        const data2 = [2, 3];

        // act
        const response = seekAndDestroy(data1, data2);

        // assert 
        expect(response).toEqual([1, 5, 1]);
    });
});
