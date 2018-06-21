function allLongestStrings(inputArray: string[]): string[] {
    let longestLength = 0;
    const longestWords = [];

    inputArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });

    inputArray.forEach((word: string) => {
        if(word.length === longestLength) {
            longestWords.push(word);
        }
    });

    return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));