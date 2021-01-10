import { avoidObstacles } from './avoidObstacles';

xdescribe(avoidObstacles.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [5, 3, 6, 7, 9];


        // act
        const response = avoidObstacles(data);

        // assert
        expect(response).toBe(4);
    });
});
