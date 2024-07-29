// Higher ordered function

// function paramentr sifatida biror bir boshqa array methodlarini qabul qila olishi (map, filter, sort ec... )

// const numbers = [1, 2, 3, 4, 5,];

// numbers.map((n) => {
//     console.log(n + 1);
// });

// const name = [1, 2, 3, 4, 5];

// name.map((a) => {
//     console.log(a - 1);
// })

// =====================================================================================================

// callback function

// biror bir function boshqa bir functionda paremtr sifatida kelishi!

// const number = [1, 2, 3, 4, 5];

// number.forEach(() => {});       // shu holatning ichki qismi callback function deb ataladi (forEach esa higher ordered func hisoblanadi)


// ========================================================================================================

// class (OOP)

// OOP => object oriented programming (paradigma)   => class asosida ishlash!
// OOPning 4ta tamoyili (Encapsulatin, Polymorhism, Inheritance, Abstraction)
// FP => Functional programming         => function orqali ishlash!



// const madina = () => {
//     console.log('Man axmoqman');
// }
// madina();

////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Class  Cunstroctor()


// class car {
//     constructor(name,model,color) {
//         this.name = name;
//         this.model = model;
//         this.color = color;
//     }
//     aboutCar() {
//         console.log(`This is ${this.name} ${this.model} and color is ${this.color}!`);
//     }
// }

// // let first = new car('Tesla','G-3','white');
// // first.aboutCar();

// class car2 extends car {
//     constructor(name,model,color,speed){
//         super(name,model,color);
//         this.speed = speed;
//     }
//     spCar() {
//         console.log(`Spead in a hour is ${this.speed}`);
//     }
// }

// // let second = new car2('Tesla','G-3','white','250 p/h');
// // second.spCar();

// class car3 extends car2{
//     constructor(name,model,color,speed,price){
//         super(name,model,color,speed);
//         this.price = price;
//     }
//     clickIt() {
//         console.log(`This model is th best ${this.price}`);
//     }
// }
// let pr = new car3('Tesla','G-3','white','250 p/h','expensive')
// pr.clickIt();













// Function evalNumbers() prints the result after evaluating arithmetic operations between two numbers of addition, multiplication, division, and modulus in JavaScript.

//  1 Print result of num1+num2 if operation is “add”
//  2 Print result of num1-num2 if operation is “subtract”
//  3 Print result of num1*num2 if operation is “multiply”
//  4 Print result of num1/num2 if operation is “divide”
//  5 Print result of num1%num2 if operation is “modulus”
//  6 Else print “Invalid operation”


// function evelNum(num1, num2, operation) {

//     if(operation == 'add') {
//         console.log(num1 + num2);
//     } else if(operation == 'subtract') {
//         console.log(num1 - num2);
//     } else if( operation == 'multiply') {
//         console.log(num1 * num2);
//     } else if(operation == 'divide') {
//         console.log(num1 / num2);
//     } else if (operation === 'modules') {
//         console.log(Math.abs(num1 - num2));
//     } else {
//         console.log('Invalid operation');
//     } 
// }
// evelNum(3, 5, 'add');
// evelNum(3, 5, 'subtract');
// evelNum(3, 5, 'multiply');
// evelNum(3, 5, 'divide');
// evelNum(3, 5, 'modules');



