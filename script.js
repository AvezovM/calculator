let priceForOne = document.querySelector("#price_for_one");
let startExpenses = document.querySelector("#start_exs");
let circulation = document.querySelector("#circulation");
let finalNumber = document.querySelector(".final_number");
let finalPrice = document.querySelector(".final_price");
let applicationContent = document.querySelector(".text_application");
let applicationText = document.querySelector("#application");
let percentContent = document.querySelector(".text_percent");
let percentText = document.querySelector("#percent");

const squreElement = document.getElementById("square");
const squareIndex = squreElement.selectedIndex;

const colorElement = document.getElementById("color");
const colorIndex = colorElement.selectedIndex;
let sumOfCirculation, sumOfAll, priceAlways = 190;

let newValue, countPercent, colorElementNow;

function countPrice(price) {
	priceForOne.value = price;
	sumOfCirculation = Number(price) * Number(circulation.value);
	sumOfAll = Number(startExpenses.value) + sumOfCirculation;
	finalNumber.textContent = `Итого за ${circulation.value} шт`;
	finalPrice.textContent = `${sumOfAll}`;
}

function numberColorElement() {
	if(colorElementNow == 1){
		countColor(0.25, 1, 25);
	}
	else if(colorElementNow == 2){
		countColor(0.5, 2, 50);
	}
	else if(colorElementNow == 3){
		countColor(0.75, 3, 75);
	}
	else if(colorElementNow == 4){
		countColor(1, 4, 100);
	}
	else if(colorElementNow == 5){
		countColor(1.25, 5, 125);
	}
}

function countColor(percent, index, text) {
	applicationContent.textContent = `- нанесение `;
	applicationText.textContent = `${priceAlways}`;
	countPercent = priceAlways * `${percent}`;
	percentContent.textContent = `- ${text}% за ${index} доп.цвет`;
	percentText.textContent = ` ${countPercent}`;
	newValue = priceAlways + countPercent;
	countPrice(newValue)
}

function circulationChange(value, price) {
	if (circulation.value >= value) {
		countPrice(price)
		priceAlways = price;
		numberColorElement();
	}
}

function colorChangeCirculation () {
	if (colorElement.selectedIndex == 0) {
		application.textContent = ``;
		applicationContent.textContent = ``;
		percentContent.textContent = ``;
		percent.textContent = ``;
		newValue = priceAlways;
		countPrice(newValue)
		colorElementNow = 0;
		console.log(colorElementNow)
	}
	if (colorElement.selectedIndex == 1) {
		countColor(0.25, 1, 25);
		colorElementNow = 1;
		console.log(colorElementNow)
	} 
	if (colorElement.selectedIndex == 2) {
		countColor(0.5, 2, 50);
		colorElementNow = 2;
		console.log(colorElementNow)
	}
	if (colorElement.selectedIndex == 3) {
		countColor(0.75, 3, 75);
		colorElementNow = 3;
		console.log(colorElementNow)
	}
	if (colorElement.selectedIndex == 4) {
		countColor(1, 4, 100);
		colorElementNow = 4;
		console.log(colorElementNow)
	}
	if (colorElement.selectedIndex == 5) {
		countColor(1.25, 5, 125);
		colorElementNow = 5;
		console.log(colorElementNow)
	}
}

function squareChangeCirculation() {
	if (squreElement.selectedIndex == 0) {
		circulationChange(30, 167);
		circulationChange(50, 140);
		circulationChange(100, 110);
		circulationChange(300, 97);
		circulationChange(1000, 87);
		circulationChange(3000, 79);
		
	} 
	if (squreElement.selectedIndex == 1) {
		circulationChange(10, 228);
		circulationChange(30, 200);
		circulationChange(50, 168);
		circulationChange(100, 132);
		circulationChange(300, 116);
		circulationChange(1000, 104);
		circulationChange(3000, 95);

	}
	if (squreElement.selectedIndex == 2) {
		circulationChange(10, 274);
		circulationChange(30, 209);
		circulationChange(50, 175);
		circulationChange(100, 138);
		circulationChange(300, 121);
		circulationChange(1000, 108);
		circulationChange(3000, 99);
	}
	if (squreElement.selectedIndex == 3) {
		circulationChange(10, 349);
		circulationChange(30, 271);
		circulationChange(50, 228);
		circulationChange(100, 179);
		circulationChange(300, 158);
		circulationChange(1000, 141);
		circulationChange(3000, 128);
	}
	if (squreElement.selectedIndex == 4) {
		circulationChange(10, 419);
		circulationChange(30, 325);
		circulationChange(50, 274);
		circulationChange(100, 215);
		circulationChange(300, 190);
		circulationChange(1000, 169);
		circulationChange(3000, 154);
	}
}

squreElement.addEventListener("change", () => {
	console.log(squreElement.selectedIndex);
	squareChangeCirculation();
});


colorElement.addEventListener("change", () => {
	colorChangeCirculation()
});


circulation.addEventListener("change", () => {
	console.log(circulation.value);
	squareChangeCirculation()
	colorChangeCirculation()
});
