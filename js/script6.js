let digit = parseInt(prompt('Введите трехзначное число'));
let firstDigit = digit % 10;
let secondDigit = digit % 100 / 10;
secondDigit = parseInt(secondDigit);
let thirdDigit = digit / 100;
thirdDigit = parseInt(thirdDigit);
let sumDigit = firstDigit + secondDigit + thirdDigit;
let compositionDigit = firstDigit * secondDigit * thirdDigit;

if (sumDigit % 2 === 0) {
	console.log('Сумма цифр введенного числа является четной');
} else {
	console.log('Сумма цифр введенного числа нечетная');
}

if (sumDigit % 5 === 0) {
	console.log('Сумма цифр введенного числа кратна 5');
} else {
	console.log('Сумма цифр введенного числа не кратна 5');
}

if (compositionDigit > 100) {
	console.log('Произведение цифр введенного числа больше 100');
} else {
	console.log('Произведение цифр введенного числа меньше 100');
}