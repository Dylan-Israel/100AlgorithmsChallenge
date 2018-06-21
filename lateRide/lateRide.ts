function lateRide(n: number): number {
    const hours = Math.floor(n / 60);
    const minutes = n % 60;
    const time = hours.toString().concat(minutes.toString()).split('').map((char) =>
    parseInt(char)
);

    return time.reduce((a, b) => a + b);
}

console.log(lateRide(240));
console.log(lateRide(808));
