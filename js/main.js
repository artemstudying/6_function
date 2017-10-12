//1) площадь круга

function circleSquere(rad){
	let squere = 0;
	squere = Math.PI * Math.pow(rad, 2);
	console.log('площадь круга равна ' + squere);
};

//2) длину окружности
function circleLength(rad){
	let length = 0;
	let d  = rad * 2;
	length = Math.PI * d;
	console.log('Окружность круга равна ' + length);
};

//
//3) среднее арифметическое двух чисел
function everageNum(num1, num2){
	let average = (num1 + num2) / 2; //т.к. мы заранее знаем, что чисел два.
	console.log(average);
};
//4) среднее арифметическое любого массива
var array = [9, 87, 43, 20, 1, 7, 98, 7];

function everageArr(arr){
	let summ = 0;
	let count = 0;
	for(var i = 0; i < arr.length; i ++){
			summ += arr[i];
			count ++;
	}
	let everage = summ / count;
	
	console.log(everage);
};
//
//привести примеры их использования


circleSquere(3);
circleLength(3);
everageNum(5, 15);
everageArr(array);