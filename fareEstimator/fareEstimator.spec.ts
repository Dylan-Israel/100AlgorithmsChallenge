import { fareEstimator } from './fareEstimator';

xdescribe(fareEstimator.name, () => {
    it('Test 1', () => {
        // arrange
        const ride_time = 30;
        const ride_distance = 7;
        const cost_per_minute = [0.2, 0.35, 0.4, 0.45];
        const cost_per_mile = [1.1, 1.8, 2.3, 3.5];

        // act
        const response = fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile);

        // assert 
        expect(response).toEqual([13.7, 23.1, 28.1, 38]);
    });
});
