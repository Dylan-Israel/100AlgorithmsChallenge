import { firstDuplicate } from './firstDuplicate';

xdescribe(firstDuplicate.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [2, 1, 3, 5, 3, 2];

        // act
        const response = firstDuplicate(data);

        // assert 
        expect(response).toBe(3);
    });

    it('Test 2', () => {
        // arrange
        const data = [2, 4, 3, 5, 1];

        // act
        const response = firstDuplicate(data);

        // assert 
        expect(response).toBe(-1);
    });
});
