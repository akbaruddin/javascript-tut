nextPrime: for (let num = 2; num <= 100; num++) {
    let prime = num;
    for (let val = 2; val < num; val++) {
        if (num % val == 0) continue nextPrime;
        prime = num;
    }
    console.log(prime)
}