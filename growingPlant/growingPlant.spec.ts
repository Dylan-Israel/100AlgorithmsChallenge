import { growingPlant } from './growingPlant';

xdescribe(growingPlant.name, () => {
    it('Test 1', () => {
        // arrange
        const upSpeed = 100;
        const downSpeed = 10;
        const desiredHeight = 910;

        // act
        const response = growingPlant(upSpeed, downSpeed, desiredHeight);

        // assert 
        expect(response).toBe(10);
    });

});
