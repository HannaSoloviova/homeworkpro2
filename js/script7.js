let digit = parseInt(prompt('Введите трехзначное число'));
let firstDigit = digit / 100;
firstDigit = parseInt(firstDigit);
let secondDigit = digit % 100 / 10;
secondDigit = parseInt(secondDigit);
let thirdDigit = digit % 10;

if (firstDigit === secondDigit && secondDigit === thirdDigit) {
	console.log('Все цифры введенного числа одинаковы');
} else {
	console.log('Цифры введенного числа не одинаковы');
}

if (firstDigit === secondDigit && secondDigit !== thirdDigit) {
	console.log('Только первая и вторая цифры одинаковы');
} else if (secondDigit === thirdDigit && firstDigit !== secondDigit) {
	console.log('Только вторая и третья цифры одинаковы');
} else if (firstDigit === thirdDigit && secondDigit !== thirdDigit) {
	console.log('Только первая и третья цифры одинаковы');
} else if (firstDigit === secondDigit && secondDigit === thirdDigit) {
	console.log('Все цифры одинаковы');
} else {
	console.log('Одинаковых цифр нет');
}