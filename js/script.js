'use strict';

const tempCelsius = prompt('Введите температуру в градусах по Цельсию', 20);
const tempCelsiusNumber = Number(tempCelsius);
if (isNaN(tempCelsiusNumber)) {
	alert('Это не число!');
} else {
	const tempFahrenheit = (9 / 5) * tempCelsius + 32;
	alert(tempFahrenheit);
}

//

let admin;
let name = 'Василий';
admin = name;
alert(admin);

// Чему будет равно JS-выражение 1000 + "108"?
alert('Ответ: 1000108')