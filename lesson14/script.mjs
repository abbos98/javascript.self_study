// IIFE => immidietely invoked function expression


// arrow syntex

// (() => {
//     console.log('salom');
// })();

// =============================

// expressin syntax

// (function () {
//     console.log('Salom Abbos');
// })();

//  ===================================

// declaration syntax

// (function myclick() {
//     console.log('salom');
// })();


// Compare funtion

//////////////////////////////////////////////////////////////////////////////////////////

// (() => {


// function name() {
//     console.log('salom1');
// }
// name();

// })();

// =======================================================================





//  <<< Module => malum fayldan boshqa bir faylga export import qilish Es6 da qo'shilgan! >>>


// berilgan faylarni script.mjs deb ochsa modul ham qoshiladi!
// 1- usul

// export let title = 'WBA Academy';


// // function import qilish!

// export const myArrow = () => {
//     console.log('Abbos');
// }

// ===============

// 2- usul

// const clickMe = () => {
//     console.log('Salom Abbos');
// }

// export default clickMe;

// =====================

// 3 - usul 

// const clickMe = () => {
//     console.log('Salom Abbos');
// }

// const num = 100;
// const str = 'ABS';

// export {clickMe, num, str}
 
//===================================================




//  <<<<<<<<<<<< Pure function >>>>>>>>>>>>>

// 4ta tamoyil mavjud

// 1-Predictable (Oldindan nima vazifa bajarishni bilish!);
// 2-Readable (Kod oqishga onson bolish kerak!);
// 3-Reusable (Qayta-qayta ishlata olish!);
// 4-Testable (Test qilish imniyatini berish!)


// pure function //

// pure function tashqi tomondan tasr bolmaydi shunga oldidndan nimani return qilishini predict qilsak boladi!

// function sayHi(name) {
//     return `Salom ${name}`
// }
// console.log(sayHi('Abbos'));


// =============================
// impure function 

//impure function tashqi tasr boladi shungan oldindan nima bolishini predict qilish qiying

// let greeting = 'Salom';
// greeting = 'Hello';                        // bu qiymat ozgarib ketiwi mumkin shunga predict qilish qiyin!

// function sayHi(name) {
//     console.log(`${greeting} ${name}`);
// }
// console.log(sayHi('Abbos'));



// =================================================================================

//  new Date();

// let d = new Date();

// console.log(d); // => hozirgi vaqtni korsatadi!
// console.log(d.getDate());  => bugungi sanani korsatadi!
// console.log(d.getDay()); // => haftaning nechinchi kunligini olib beradi!
// console.log(d.getMonth()); // =>hozir nechinchi oyligini chiqarib beradi (faqat 1 minus bilan korsatadi chingi javascriptda oylar 0dan boshlanadi!)
// console.log(d.getFullYear()); // => yilni chiqarib beradi!
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());


// ======================================================================================

// curry function => parametrlan alohida berilib argumentlar ham alohida berilishi kk!

// const add = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
// console.log(add(5)(5)(5));


// function sendRequest(sayHi) {
//     return function (name) {
//         return function (message) {
//             return `${sayHi} ${name} ${message}`
//         }
//     }
// }
// console.log(sendRequest('Salom')('Abbos')('Qachon IT ni zor organasan?'));




