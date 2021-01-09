import { isTandemRepeat } from './isTandemRepeat';

xdescribe(isTandemRepeat.name, () => {
    it('Test 1', () => {
        // arrange
        const inputString = 'tandemtandem';

        // act
        const response = isTandemRepeat(inputString);

        // assert 
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        // arrange
        const inputString = 'qqq';

        // act
        const response = isTandemRepeat(inputString);

        // assert 
        expect(response).toBe(false);
    });

    it('Test 3', () => {
        // arrange
        const inputString = '2w2ww';

        // act
        const response = isTandemRepeat(inputString);

        // assert 
        expect(response).toBe(false);
    });
});
