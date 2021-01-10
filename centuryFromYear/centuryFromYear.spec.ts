import { centuryFromYear } from './centuryFromYear';

xdescribe(centuryFromYear.name, () => {
    it('Test 1', () => {
        // arrange
        const data = 1905;

        // act
        const response = centuryFromYear(data);

        // assert
        expect(response).toBe(20);
    });

    it('Test 2', () => {
        // arrange
        const data = 1700;

        // act
        const response = centuryFromYear(data);

        // assert
        expect(response).toBe(17);
    });
});
