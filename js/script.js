//1.Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
// const name = prompt("What is your name?");
// alert("Hello, " + name + "!");

// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
// const year = 2020;
// const birthYear = prompt("What is your birth year?");
// const age = year - birthYear;
// console.log("You are " + age);

// 3.Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
// const number = prompt("Enter side length");
// alert(`Perimeter of the square is  ${number * 4}`);

// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
// const radius = prompt("Enter radius");
// alert(`Square of the circle is  ${radius * radius * 3.14}`);

// 5.Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
// const distance = prompt("Enter distance");
// const time = prompt("Enter time");
// alert(`Your speed should be ${distance / time}.`);

// 6.Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
// const convert = 0.92;
// const dollar = prompt("Enter sum in dollars");
// alert(`Your sum in euros is €${dollar * convert}.`);

// 7.Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
// let volume = +prompt("Enter flash drive volume in Gb");
// let reminder = volume % 0.82;
// let numberOfFiles = (volume - reminder) / 0.82;
// console.log(numberOfFiles + " file(s) will fit on yur flash drive.");

// 8.Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
// let sum = +prompt("Enter sum in your wallet");
// let price = +prompt("Enter price of the chocolate bar");
// let reminder = sum % price;
// console.log(
//   "You can buy " +
//     (sum - reminder) / price +
//     " chocolate bar(s) and your change will be " +
//     reminder
// );

// 9.Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
// let number = +prompt("Enter a three-figure number");
// let unit = number % 10;
// let ten = ((number - (number % 10)) / 10) % 10;
// let hundred = (number - (number % 100)) / 100;
// let newNumber = String(unit) + String(ten) + String(hundred);
// console.log(newNumber);

// 10.Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
// let sum = +prompt("Enter a sum");
// let percentForTwoMonths = (sum * 0.05) / 6;
// console.log(percentForTwoMonths);
