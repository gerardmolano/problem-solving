function calculateTax(income) {
    const taxTbl = [
        { lower: 0, upper: 15000, rate: 0.1 }, // first fill
        { lower: 15000, upper: 25000, rate: 0.2 }, // second fill
        { lower: 25000, upper: 50000, rate: 0.25 }, // third fill
        { lower: 0, upper: 55000, rate: .35 } // fourth fill
    ]

    let tax = 0;
    let ctrFill = 0;
    while (true) {
        const incomeRange = taxTbl[ctrFill].upper - taxTbl[ctrFill].lower;
        const rate = taxTbl[ctrFill].rate;

        if (income >= incomeRange) {
            tax += (incomeRange * rate);
            income -= incomeRange;
        } else {
            tax += (income * rate);
            break;
        }

        ctrFill++;
    }

    return tax;
}

// test here
console.log(calculateTax(55000));
