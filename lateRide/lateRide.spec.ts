import { lateRide } from './lateRide';

xdescribe(lateRide.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 240;

        // act
        const response = lateRide(data);

        // assert 
        expect(response).toBe(4);
    });

    it('Test 2', () => {
        // arrange
        const data = 808;

        // act
        const response = lateRide(data);

        // assert 
        expect(response).toBe(14);
    });
});
