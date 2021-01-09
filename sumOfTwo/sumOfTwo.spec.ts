import { sumOfTwo } from './sumOfTwo';

xdescribe(sumOfTwo.name, () => {
    it('Test 1', () => {
        // arrange
        const a = [1, 2, 3];
        const b = [10, 20, 30, 40];
        const v = 42;

        // act
        const response = sumOfTwo(a, b, v);

        // assert 
        expect(response).toBe(true);
    });
});
