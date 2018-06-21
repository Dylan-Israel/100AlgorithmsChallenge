function depositProfit(deposit: number, rate: number, threshold: number): number {
    let year = 0;
    let account = deposit;

    while(threshold > account) {
        account += account * (rate / 100);
        year++;
    } 

    return year;
}

console.log(depositProfit(100, 20, 170))