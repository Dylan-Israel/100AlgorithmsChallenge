import { maxMultiple } from './maxMultiple';

xdescribe(maxMultiple.name, () => {
    it('Test 1', () => {
        // arrange
        const divisor = 3;
        const bound = 10;

        // act
        const response = maxMultiple(divisor, bound);

        // assert 
        expect(response).toBe(9);
    });
});
