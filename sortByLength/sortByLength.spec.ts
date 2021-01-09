import { sortByLength } from './sortByLength';

xdescribe(sortByLength.name, () => {
    it('Test 1', () => {
        // arrange
        const data = ["abc",
            "",
            "aaa",
            "a",
            "zz"];

        // act
        const response = sortByLength(data);

        // assert 
        expect(response).toEqual(["",
            "a",
            "zz",
            "abc",
            "aaa"]);
    });
});
