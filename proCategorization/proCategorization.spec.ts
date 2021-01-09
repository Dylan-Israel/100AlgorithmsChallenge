import { proCategorization } from './proCategorization';

xdescribe(proCategorization.name, () => {
    it('Test 1', () => {
        // arrange
        const pros = ["Jack", "Leon", "Maria"];
        const preferences = [["Computer repair", "Handyman", "House cleaning"],
        ["Computer lessons", "Computer repair", "Data recovery service"],
        ["Computer lessons", "House cleaning"]];

        // act
        const response = proCategorization(pros, preferences);

        // assert 
        expect(response).toEqual([[["Computer lessons"], ["Leon", "Maria"]],
        [["Computer repair"], ["Jack", "Leon"]],
        [["Data recovery service"], ["Leon"]],
        [["Handyman"], ["Jack"]],
        [["House cleaning"], ["Jack", "Maria"]]]);
    });
});
