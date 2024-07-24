//  <<< Prototype >>>


const user = {
    name: 'Abbos',
    lastName: 'Begmatov',
    age: 25,


greet() {
    console.log('Hi');
 }
}

Object.prototype.getAge = function (a, b) {         //global object prototypega asoslanib function yaratish!
    return a + b
}

// Array.prototype.getName = function (name) {             //arrayga asoslanib function yaratish bu global bo'lmapydi!
//     console.log(`Hi ${name}`);
// }


// Number.prototype.getSum = function (a, b) {             // Number function yaratish 
//     return a * b
// } 

// // 
// let num = new Number(100);                      // agar shu holatni yozmasa inspectda prototype chiqmaydi


String.prototype.sayHi = function name() {
    return `Hi ${name}`
}
// 
let str = new String('WBA');
