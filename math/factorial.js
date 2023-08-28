const factorial = num => {
    let factorial = 1;

    let i = 1;
    while (i <= num) {
        factorial *= i++;
    }

    return factorial;
}

console.log(factorial(0));
