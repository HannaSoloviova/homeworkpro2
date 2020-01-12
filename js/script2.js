let distanceKm = parseInt(prompt('Введите расстояние в км'));
let distanceFt = parseInt(prompt('Введите расстояние в футах'));
let firstDistance = distanceKm * 1000;
let secondDistance = distanceFt * 0.305;

if (firstDistance > secondDistance) {
	console.log('Расстояние в футах меньше');
} else { 
	console.log('Расстояние в км меньше');
}