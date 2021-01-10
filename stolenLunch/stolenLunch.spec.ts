import { stolenLunch } from './stolenLunch';

xdescribe(stolenLunch.name, () => {
    it('Test 1', () => {
        // arrange
        const note = "you'll n4v4r 6u4ss 8t: cdja";

        // act
        const response = stolenLunch(note);

        // assert 
        expect(response).toBe("you'll never guess it: 2390");
    });
});
