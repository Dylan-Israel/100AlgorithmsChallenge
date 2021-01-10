import { sortByHeight } from './sortByHeight';

xdescribe(sortByHeight.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [-1, 150, 190, 170, -1, -1, 160, 180];

        // act
        const response = sortByHeight(data);

        // assert 
        expect(response).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
    });
});
