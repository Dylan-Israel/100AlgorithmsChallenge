import { composeRanges } from './composeRanges';

xdescribe(composeRanges.name, () => {
    it('Test 1', () => {
        // arrange
        const data = [-1, 0, 1, 2, 6, 7, 9];

        // act
        const response = composeRanges(data);

        // assert 
        expect(response).toEqual(["-1->2", "6->7", "9"]);
    });
});
