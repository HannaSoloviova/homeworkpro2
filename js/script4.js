let digit = parseInt(prompt('Введите число'));
let lastDigit = digit % 10;

if (digit % 2 === 0) {
	console.log('Число заканчивается четной цифрой');
} else { 
	console.log('Число заканчивается нечетной цифрой');
}

console.log(lastDigit);
