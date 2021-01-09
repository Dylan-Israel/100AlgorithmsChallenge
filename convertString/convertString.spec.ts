import { convertString } from './convertString';

xdescribe(convertString.name, () => {
    it('Test 1', () => {
        // arrange
        const s = 'ceoydefthf5iyg5h5yts';
        const t = 'codefights';

        // act
        const response = convertString(s, t);

        // assert 
        expect(response).toBe(true);
    });

    it('Test 2', () => {
        // arrange
        const s = 'addbyca';
        const t = 'abcd';

        // act
        const response = convertString(s, t);

        // assert 
        expect(response).toBe(false);
    });
});
