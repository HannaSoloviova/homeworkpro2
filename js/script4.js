let digit1 = parseInt(prompt('Введите число'));

if (digit1 % 2 === 0) {
	console.log('Число заканчивается четной цифрой');
} else { 
	console.log('Число заканчивается нечетной цифрой');
}

console.log(digit1 % 10);
