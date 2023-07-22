function sumOfNaturalNumbers(n) {
    return (n * (n + 1)) / 2;
}

const num = parseInt(prompt("Введите n:"));
const result = sumOfNaturalNumbers(num);
console.log(`Сумма первых ${num} натуральных чисел: ${result}`);
