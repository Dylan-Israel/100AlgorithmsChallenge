import { shapeArea } from './shapeArea';

xdescribe(shapeArea.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 2;

        // act
        const response = shapeArea(n);

        // assert 
        expect(response).toBe(5);
    });

    it('Test 2', () => {
        // arrange
        const n = 3;

        // act
        const response = shapeArea(n);

        // assert 
        expect(response).toBe(13);
    });
});
