import { alternatingSums } from './alternatingSums';

xdescribe(alternatingSums.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [50, 60, 60, 45, 70];

        // act
        const response = alternatingSums(data);

        // assert
        expect(response).toEqual([180, 105]);
    });
});
