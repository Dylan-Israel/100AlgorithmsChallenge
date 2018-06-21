function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
    while (numberOfDigits >= current.toString().length) {

        numberOfDigits -= current.toString().length;

        if (numberOfDigits >= current.toString().length) {
            current++;
        }
    }

    return current;
}
