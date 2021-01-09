import { ratingThreshold } from './ratingThreshold';

xdescribe(ratingThreshold.name, () => {
    it('Test 1', () => {
        // arrange
        const threshHold = 3.5;
        const ratings = [
            [3, 4],
            [3, 3, 3, 4],
            [4]
        ];

        // act
        const response = ratingThreshold(threshHold, ratings);

        // assert 
        expect(response).toEqual([1]);
    });
});
