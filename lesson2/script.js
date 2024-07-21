// Data types 8ta!

// Primitive data type => String, number, boolean, null, undefined,symbol, bigInt
// Non-primative data tyoes => object (object, array, function)

// var son = 425345235235;

// console.log(son);
// console.log(son);
// console.log(son);

// => Variables  var, let, const

// var n = 100;
// n = 200;
// var n = 300;      => bu eski o'zgaruvchilardan biri hisoblanib deyarli ishlatilmidi!

// console.log(n);

// let n = 200;
// n = 300;
// let n = 400;      => bu holat let oz qiymatini 2 chi marotaba almashtirmidi!

// console.log(n);

// const n = 200;    
// // n = 200;
// console.log(n);   => bu holatda qiymatni umuman ozgartirib bolmaydi!


// => DATA TYPES 

// PRIMATIVE DATA TYPES 

// 1)number 
// var n1 = 100;
// var n2 = 200;

// console.log(n1 + n2);
//////////////////////////////////////////////

// 2)string  (xarflar bilan ishlash)

// var text = 'salom bolakay';
// console.log(text);
//////////////////////////////////////////////

// 3)boolean => true/ false holatda qaytadadi!
//////////////////////////////////////////////

// 4)null => bosh qiymat

// var n = null;
// console.log(n);
/////////////////////////////////////////////

// 5)undefined  => o'zgaruvchi bor lekin qiymat yo'q!

// var n;
// console.log(n);
/////////////////////////////////////////////

// 6)BigInt   => katta sonlar bn ishlaganda qolannadi (sonni oxiriga n belgisi qoyiladi)

// var n = 45678987654345679545097695034343294n;
// console.log(n);
///////////////////////////////////////////////

// 7) symbol => yagona bo'lgan qiymatlar saqlanadi!
///////////////////////////////////////////////


// NON-PRIMATIVE DATA TYPES 

// object => malum narsa haqida malumotlar janlanmasini yaratiladi!

// var obj = {
//     name:'Abbos',
//     age:25,
//     status:'Student'
// };
// console.log(obj);

/////////////////////////////////////////////////
// array 

// var container = [null, 100, undefined, {name: "abbos"}, 'Salom']
// console.log(container[3]);

//////////////////////////////////////////////////

// var n = 100;
// var text = 'WBA';
// var n = null;
// var n = [];
// var n = {};

// console.log(typeof n);
///////////////////////////////////////////////////

// primative vs non-primative

// var n = 100;                => primative callstack da saqlanadi
// var obj = {name:'Abbos'};   => heapmemorida saqlanadi!