import { areSimilar } from './areSimilar';

xdescribe(areSimilar.name, () => {
    it('Test 1', () => {
        // arrange
        const data1 = [1, 2, 3];
        const data2 = [1, 2, 3];

        // act
        const response = areSimilar(data1, data2);

        // assert
        expect(response).toEqual(true);
    });

    it('Test 2', () => {
        // arrange
        const data1 = [1, 2, 3];
        const data2 = [2, 1, 3];

        // act
        const response = areSimilar(data1, data2);

        // assert
        expect(response).toEqual(true);
    });

    it('Test 3', () => {
        // arrange
        const data1 = [1, 2, 2];
        const data2 = [2, 1, 1];

        // act
        const response = areSimilar(data1, data2);

        // assert
        expect(response).toEqual(false);
    });
});
