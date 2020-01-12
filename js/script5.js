let digit = parseInt(prompt('Введите двузначное число'));
let firstDigit = digit / 10;
firstDigit = parseInt(firstDigit);
let secondDigit = digit % 10;

if (firstDigit > secondDigit) {
	console.log('Первая цифра введенного числа больше второй');
} else if (secondDigit > firstDigit) {
	console.log('Вторая цифра введенного числа больше первой');
} else {
	console.log('Цифры введенного числа равны');
}