import { electionsWinners } from './electionWinners';

xdescribe(electionsWinners.name, () => {
    it('Test 1', () => {
        // arrange
        const votes = [2, 3, 5, 2];
        const k = 3;

        // act
        const response = electionsWinners(votes, k);

        // assert 
        expect(response).toBe(2);
    });
});
