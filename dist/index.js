"use strict";
let value = 10;
const result = value + 10; //implicit 
var obligation = "I am a string"; //explicit 
let valueread = true; //explicit
let mynumberf = "nature";
console.log(typeof mynumberf);
let myArray = 10;
const variable = JSON.parse("55");
const number = [56, 67, 87];
number.push(5);
let head = number[0];
console.log(number);
//tuple 
//const mytuple45:[number,string,boolean] = [10,true,"hello"];
const mytuple = [10, "hello", true,];
mytuple.push(15);
console.log(mytuple);
const mytuple2 = [10, "hello", true];
//mytuple2.append(5);
//named tuple
const mytuple5 = [10, "hello", true];
const valnaraible = {
    name: "john",
    age: 25
};
const clary = {
    name: "john doe",
    age: 25
};
clary.age = 30;
console.log(clary);
const valueanna = 10;
const valueanna5 = {
    name: value,
};
valueanna5.age = 20;
const keyboard = {
    number: "hello",
    2: "world"
};
//enums 
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["blue"] = 2] = "blue";
    color[color["pink"] = 3] = "pink";
    color[color["black"] = 4] = "black";
})(color || (color = {}));
let currentcolor = color.red;
console.log(currentcolor);
//numeric enums 
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
//string enums
var StatusCodes2;
(function (StatusCodes2) {
    StatusCodes2["NotFound"] = "error";
    StatusCodes2["Success"] = "char";
    StatusCodes2["Accepted"] = "value";
    StatusCodes2["BadRequest"] = "data";
})(StatusCodes2 || (StatusCodes2 = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
const car = {
    carname: "mercedis",
    carcolor: "red",
    carprice: 50000,
    carmodel: "A class"
};
car.carprice = 60000;
console.log(car);
const user1 = {
    id: 1,
    name: "john",
    isAdmin: true,
};
let product1 = {
    id: 1,
    name: "laptop",
    price: 500,
    category: "electronics"
};
product1.dicount = 10;
console.log(product1);
const valueerrer = {
    carname: "mercedis",
    carcolor: "red",
    carprice: 50000,
    carmodel: "A class"
};
//function 
function add() {
    return 10 + 20;
}
console.log(add());
function add2() {
    10 + 20;
}
console.log(add2());
function add3(a, b) {
    a + b;
}
console.log(add3(10, 20));
function add4(a, b) {
    a + b;
}
console.log(add4(10, 79));
function add5({ a, b }) {
    a + b;
}
//console.log(add5(10,true));
function getDiscountedPricev({ price, discount = 0 }) {
    price - (price * discount / 100);
}
function primeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const rect = {
    width: 10,
    height: 20
};
function calculateArea(rect1, color2) {
    // We can use rect1 to calculate the area
    console.log(`Color of rectangle: ${color2.color}`); // Accessing the color from ColorRectangle
    return rect1.width * rect1.height; // Correct calculation using rect1
}
// Creating a ColorRectangle instance
const coloredRect = {
    width: 15,
    height: 25,
    color: "red"
};
// Calling the function correctly
const area = calculateArea(coloredRect, coloredRect);
console.log(`Area of the rectangle: ${area}`);
const nameva = "john";
console.log(typeof nameva);
