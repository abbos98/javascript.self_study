// JSON dan malumot qabul qilish uslubi!

// const companies =
// [
//     {
//         "name" : "webbrain",
//         "numberOfEmployees" : 10,
//         "CEO" : "Sardorbek",
//         "Rating" : 4.5
//     },
//     {
//         "name" : "G-3",
//         "numberOfEmployees" : 5,
//         "CEO" : "Bekzod",
//         "Rating" : 4.9
//     }
// ]

// console.log(companies[1].name);           // shu holatda access qilsa bo'ladi

//=================================================================

// 

// let company = {name: "Abbos"};

// let objToJson = JSON.stringify(company);           // Malumotlarni JSON formatiga otqazish!    => JSON.stringify(~~~);    
// let jsonToObj = JSON.parse(objToJson);             // malumotlarni JSON dan objectga qaytarish  => JSON.parse(~~~);  

// console.log(jsonToObj);


///////////////////////////////////////////////////////////////////////////////////////////////////

// Bu holaatda kutiladigan holat yoq yani tez bolib javob qaytadi!

// let usersOfFacebook = {
//     id: 'Abbo5s',
//     pw: 'Salom',
//     userName:'Abbos'
// }

// const facebook = (pw, userName) => {
//     if(usersOfFacebook.pw === pw && usersOfFacebook.userName === userName){
//         return `Sahifangizga kirdiz!`
//     } else {
//         return `Nimadir xato!`
//     }
// }
// const user = facebook ('Salom', 'Abbos');;
// console.log(user);


/////////////////////////////////////////////////////////////////////////////////////////////

// Bu holatda 1 sekundan keyin iwlashi kerak va uni javascript kutmaydi! buni hal qilish uchin call back kerak boladi!

// let usersOfFacebook = {
//     id: 'Abbo5s',
//     pw: 'Salom',
//     userName:'Abbos'
// }

// console.log('Started');

// const facebook = (pw, userName, callbaclFn) => {

//  setTimeout(() => {

   
//     if(usersOfFacebook.pw === pw && usersOfFacebook.userName === userName){
//         return `Sahifangizga kirdiz!`
//     } else {
//         return `Nimadir xato!`
//     }
//  }, 1000)
// }
// const user = facebook ('Salom', 'Abbos');;
// console.log(user);

// console.log('Finished');


// ==============================

// muamo hal qilindi!

// let usersOfFacebook = {
//     id: 'Abbo5s',
//     pw: 'Salom',
//     userName:'Abbos'
// }

// console.log('Started...');

// const facebook = (pw, userName, callbackFn) => {

//  setTimeout(() => {

   
//     if(usersOfFacebook.pw === pw && usersOfFacebook.userName === userName){
//         callbackFn (`Sahifangizga kirdiz!`)
//     } else {
//         callbackFn (`Nimadir xato!`)
//     }
//  }, 3000)

// }

// facebook ('Salom', 'Abbos', (malumot) => {
//     console.log(malumot);
//     console.log('Finished....');
// });;

// => bu bizda eski variyat hisoblanadi!

/////////////////////////////////////////////////////////////////////////////////////////////

// <<< Promise >>>
// => temadagi holat bn bir xil faqat yangiroq holati!

///////////////////////////////////////////////////////////////////////////////////

// => 2lik sonoq sistemadan 10 lik sanoq sistemaga ozgartirish!

// let num = '1000110';

// let check = parseInt(num, 2);

// console.log(check);


// ==========================

// 10 lik sanoq sistemasidan 2 lik saloq sistemga o'girish!

// let decimal = 37;

// let check = decimal.toString(2);

// console.log(check);