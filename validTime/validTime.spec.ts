import { validTime } from './validTime';

xdescribe(validTime.name, () => {
    it('Test 1', () => {
        // arrange
        const time = '13:58';

        // act
        const response = validTime(time);

        // assert 
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        // arrange
        const time = '25:51';

        // act
        const response = validTime(time);

        // assert 
        expect(response).toBe(false);
    });

    it('Test 3', () => {
        // arrange
        const time = '02:76';

        // act
        const response = validTime(time);

        // assert 
        expect(response).toBe(false);
    });
});
