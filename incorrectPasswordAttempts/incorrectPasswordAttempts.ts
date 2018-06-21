function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {
    let failedAttempts = 0;

    for (let attempt of attempts) {
        failedAttempts = attempt === passcode ? 0 : failedAttempts++;

        if (failedAttempts === 10) {
            return true;
        }
    }

    return false;
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));