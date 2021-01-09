import { isLucky } from './isLucky';

xdescribe(isLucky.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 1230;

        // act
        const response = isLucky(data);

        // assert 
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        // arrange
        const data = 239017;

        // act
        const response = isLucky(data);

        // assert 
        expect(response).toBe(false);
    });
});
