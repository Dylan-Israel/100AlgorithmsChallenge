import { digitDegree } from './digitDegree';

xdescribe(digitDegree.name, () => {
    it('Test 1', () => {
        // arrange
        const n = 5;

        // act
        const response = digitDegree(n);

        // assert 
        expect(response).toBe(0);
    });

    it('Test 2', () => {
        // arrange
        const n = 100;

        // act
        const response = digitDegree(n);

        // assert 
        expect(response).toBe(1);
    });

    it('Test 3', () => {
        // arrange
        const n = 91;

        // act
        const response = digitDegree(n);

        // assert 
        expect(response).toBe(1);
    });
});
