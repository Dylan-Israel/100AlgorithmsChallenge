import { confirmEnding } from './confirmEnding';

xdescribe(confirmEnding.name, () => {
    it('Test 1', () => {
        // arrange
        const str1 = "Abstraction";
        const str2 = "action";

        // act
        const response = confirmEnding(str1, str2);

        // assert 
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        // arrange
        const str1 = "Open sesame";
        const str2 = "pen";

        // act
        const response = confirmEnding(str1, str2);

        // assert 
        expect(response).toBe(false);
    });
});
