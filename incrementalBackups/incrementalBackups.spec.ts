import { incrementalBackups } from './incrementalBackups';

xdescribe(incrementalBackups.name, () => {
    it('Test 1', () => {
        // arrange
        const lastBackupTime = 461620205;
        const changes = [
            [461620203, 1],
            [461620204, 2],
            [461620205, 6],
            [461620206, 5],
            [461620207, 3],
            [461620207, 5],
            [461620208, 1]
        ];

        // act
        const response = incrementalBackups(lastBackupTime, changes);

        // assert 
        expect(response).toEqual([1, 3, 5]);
    });
});
