import { makeArrayConsecutive2 } from './makeArrayConsecutive2';

xdescribe(makeArrayConsecutive2.name, () => {
    it('Test 1', () => {
        // arrange
        const statues = [6, 2, 3, 8];

        // act
        const response = makeArrayConsecutive2(statues);

        // assert 
        expect(response).toBe(3);
    });
});
