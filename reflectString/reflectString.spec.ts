import { reflectString } from './reflectString';

xdescribe(reflectString.name, () => {
    it('Test 1', () => {
        // arrange
        const inputString = 'name';

        // act
        const response = reflectString(inputString);

        // assert 
        expect(response).toBe('mznv');
    });
});
