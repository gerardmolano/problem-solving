const fibonacci = (num) => {
    if (num > 1) {
        return fibonacci(num - 2) + fibonacci(num - 1);
    }
    return num;
}

const fibonacci2 = (num) => {
    if (num < 1) {
        return 0;
    }

    let prev = 0;
    let fibonacci = 1;
    for (let i = 0; i < num - 1; i++) {
        let temp = fibonacci;
        fibonacci = prev + fibonacci;
        prev = temp;
    }

    return fibonacci;
}

console.log(fibonacci(8));
console.log(fibonacci2(8));
