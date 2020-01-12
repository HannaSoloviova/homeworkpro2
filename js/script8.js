let digit = parseInt(prompt('Введите шестизначное число'));
let firstDigit = digit % 10;
let secondDigit = digit % 100 / 10;
secondDigit = parseInt(secondDigit);
let thirdDigit = digit % 1000 / 100;
thirdDigit = parseInt(thirdDigit);
let fourthDigit = digit % 10000 / 1000;
fourthDigit = parseInt(fourthDigit);
let fifthDigit = digit % 100000 / 10000;
fifthDigit = parseInt(fifthDigit);
let sixthDigit = digit / 100000;
sixthDigit = parseInt(sixthDigit);

if (firstDigit === sixthDigit && secondDigit === fifthDigit && thirdDigit === fourthDigit) {
	console.log('Введенное число является зеркальным');
} else {
	console.log('Введенное число не является зеркальным');
}