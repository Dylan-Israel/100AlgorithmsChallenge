import { switchLights } from './switchLights';

xdescribe(switchLights.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [1, 1, 1, 1, 1];

        // act
        const response = switchLights(data);

        // assert 
        expect(response).toEqual([0, 1, 0, 1, 0]);
    });

    it('Test 2', () => {
        // arrange
        const data = [0, 0];

        // act
        const response = switchLights(data);

        // assert 
        expect(response).toEqual([0, 0]);
    });
});
