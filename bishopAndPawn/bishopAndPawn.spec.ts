import { bishopAndPawn } from './bishopAndPawn';

xdescribe(bishopAndPawn.name, () => {
    it('Test 1', () => {
        // arrange
        const position1 = 'a1';
        const position2 = 'c3';

        // act
        const response = bishopAndPawn(position1, position2);

        // assert
        expect(response).toBe(true);
    });
});
