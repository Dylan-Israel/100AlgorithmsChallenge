import { fancyRide } from './fancyRide';

xdescribe(fancyRide.name, () => {
    it('Test 1', () => {
        // arrange
        const l = 30;
        const fares = [0.3, 0.5, 0.7, 1, 1.3];

        // act
        const response = fancyRide(l, fares);

        // assert 
        expect(response).toBe('UberXL');
    });
});
