import { incorrectPasscodeAttempts } from './incorrectPasswordAttempts';

xdescribe(incorrectPasscodeAttempts.name, () => {
    it('Test 1', () => {
        // arrange
        const passcode = "1111";
        const attempts = [
            "1111", "4444",
            "9999", "3333",
            "8888", "2222",
            "7777", "0000",
            "6666", "7285",
            "5555", "1111"];

        // act
        const response = incorrectPasscodeAttempts(passcode, attempts);

        // assert 
        expect(response).toBe(true);
    });
});
