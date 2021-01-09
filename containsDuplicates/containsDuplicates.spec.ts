import { containsDuplicates } from './containsDuplicates';

xdescribe(containsDuplicates.name, () => {
    it('Test 1', () => {
        // arrange
        const a = [1, 2, 3, 1];

        // act
        const response = containsDuplicates(a);

        // assert 
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        // arrange
        const a = [3, 1];

        // act
        const response = containsDuplicates(a);

        // assert 
        expect(response).toBe(false);
    });
});
