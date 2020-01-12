let a = parseInt(prompt('Введите число a'));
let b = parseInt(prompt('Введите число b'));

if (a % b === 0) {
	console.log('Число a является делителем числа b');
} else {
	console.log('Число a не является делителем числа b');
}

if (b % a === 0) {
	console.log('Число b является делителем числа a');
} else {
	console.log('Число b не является делителем числа a');
} 