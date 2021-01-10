import { allLongestStrings } from './allLongestStrings';

xdescribe(allLongestStrings.name, () => {
    it('Test 1', () => {
        // arrange
        const data = ["aba", "aa", "ad", "vcd", "aba"];

        // act
        const response = allLongestStrings(data);

        // assert
        expect(response).toEqual(["aba", "vcd", "aba"]);
    });
});
