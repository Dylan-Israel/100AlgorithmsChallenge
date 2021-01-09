import { stringsConstruction } from './stringsConstruction';

xdescribe(stringsConstruction.name, () => {
    it('Test 1', () => {
        // arrange
        const a = "abc";
        const b = "abccba";

        // act
        const response = stringsConstruction(a, b);

        // assert 
        expect(response).toBe(2);
    });
});
