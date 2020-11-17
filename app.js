"use strict";

// TODO:Завдання 1. У вас є знижка 20 % , яка записана у змінну, також є валюта гривні, валюта також записана у змінну.Користувач вводить ціну за товар.Ваша задача - написати функцію яка буде рахувати вартість товару зі знижкою.
// *Calculates the amount with sale
function calcSum() {
  let sale = 0.2;
  let sum = +prompt("Введіть ціну за товар :", "10");
  let sumSale = (sum - sum * sale);
  return console.log("Ціна зі знижкою : " + sumSale)
}
calcSum();


// TODO:Завдання 2. Написати функцію яка повертає більше з двох чисел.
// *Maximum value
// ?solution option 1
function max() {
  let a = +prompt("Введіть a :", "")
  let b = +prompt("Введіть b :", "")
  if (a > b) {
    return ("Більше число : " + a);
  } else {
    return ("Більше число : " + b);
  }
}
console.log(max());

// ?solution option 2
// function max() {
//     let a = +prompt("Введіть a :", "")
//     let b = +prompt("Введіть b :", "")
//     return (a > b) ? alert("Більше число : " + a):
//     alert("Більше число : " + b);
// }
//   max();

// ?solution option 3
// let x = +prompt("send :", "")
// let y = +prompt("send :", "")
// function calcSum(a, b) {
//    return console.log(Math.max(a, b));
// }
// calcSum(x, y);


// TODO:Завдання 3. Користувач вводить дані про два товари.Спочатку він вводить ціну товару, а потім кількість, потрібно в консолі порахувати і вивести загальну суму товарів.
// *sum of products
// ?solution option 1
function sumProducts() {
  let price1 = +prompt("Введіть суму 1 товару :", "")
  let quantity1 = +prompt("Введіть кількість 1 товару :", "")
  let price2 = +prompt("Введіть суму 2 товару :", "")
  let quantity2 = +prompt("Введіть кількість 2 товару :", "")
  let total = price1 * quantity1 + price2 * quantity2;
  return ("Загальна сума товарів : " + total);
}
console.log(sumProducts());

// ?solution option 2
//  let price1 = +prompt("Введіть суму 1 товару :", "")
//  let quantity1 = +prompt("Введіть кількість 1 товару :", "")
//  let price2 = +prompt("Введіть суму 2 товару :", "")
//  let quantity2 = +prompt("Введіть кількість 2 товару :", "")
// function sumProducts() {
//  let total = price1 * quantity1 + price2 * quantity2;
//   return total;
// }
// console.log(sumProducts());

// ?solution option 3
// function sumProducts() {
//   let price1 = +prompt("Введіть суму 1 товару :", "")
//   let quantity1 = +prompt("Введіть кількість 1 товару :", "")
//   let price2 = +prompt("Введіть суму 2 товару :", "")
//   let quantity2 = +prompt("Введіть кількість 2 товару :", "")
//   let total = price1 * quantity1 + price2 * quantity2;
//   return console.log(total);
// }
// sumProducts()




// TODO:Завдання 4. Користувач вводить суму покупок в магазині, потрібно прорахувати знижку, яку користувач отримує в залежності від суми на яку він придбав товари.Вивести в консоль інформацію, яка знижка в користувача, і скільки йому треба заплатити враховуючи знижку.Якщо < 1000 - 3 % , >= 1000 && < 5000 - 5 % , >= 5000 - 10 %
// *Calculates the amount with sale
let sale1 = 0.03;
let sale2 = 0.05;
let sale3 = 0.1;
let userSum = +prompt("Введіть суму товарів :", "");
function calcPrice() {
  if (userSum < 1000) {
    let saleSum1 = (userSum - userSum * sale1);
    return console.log("Ваша снижка 3%. Вам треба сплатити враховуючи знижку : " + saleSum1 + " грн.");
  } else if (userSum >= 1000 && userSum < 5000) {
    let saleSum2 = (userSum - userSum * sale2);
    return console.log("Ваша снижка 5%. Вам треба сплатити враховуючи знижку : " + saleSum2 + " грн.");
  } else if (userSum >= 5000) {
    let saleSum3 = (userSum - userSum * sale3);
    return console.log("Ваша снижка 10%. Вам треба сплатити враховуючи знижку : " + saleSum3 + " грн.");
  }
}
calcPrice();