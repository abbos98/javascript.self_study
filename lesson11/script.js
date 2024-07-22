
// New set()  vs New Map


// 1 =>  New set()

// let arr = [1, 2, 3, 4, 5, 6, 6, 6];

// let set = new Set([1, 2, 3, 4, 5, 6, 6, 6]);

// console.log(arr);
// console.log(set);



// add() method
// let set = new Set ([1, 2, 3, 4, 5, 5,]);

// set.add(100);
// set.add('Salom');
// set.add({name: 'Abbos'});

// // => objectni arrayga otqazib beradi!
// let uniqeValue = [...set];

// console.log(uniqeValue);


// has()  => malum bir qiymat bor yoki yoqligini tekshirib beradi!
// let set = new Set ([1, 2, 3, 4, 5, 5,]);
// let exist = set.has(5);

// console.log(exist);


//delete() => malum bir qiymatni ochirish!

// let set = new Set ([1, 2, 3, 4, 5, 5,]);

// set.delete(4);

// console.log(set);

// let set = new Set ([1, 2, 3, 4, 5,]);
// set.delete(4);
// console.log(set);

//clear() => hamma malumotni tozalab tashidi!

// let set = new Set ([1, 2, 3, 4, 5, 5,]);

// set.clear();

// console.log(set);

 
// size   => length ni olchab beradi!

// let set = new Set ([1, 2, 3, 4, 5, 5,]);

// let check = set.size;

// console.log(check);


// =================================================

// looping the elements of new Set ();


// let students = new Set (['Sardorbek', 'Javokhir', 'Abbos']);

// // for of
// for ( let name of students) {
//     console.log(name);
// }




// forEach();

// let students = new Set (['Abbos', 'Madina', 'Yasmina']);

// students.forEach((name) => {
//     console.log(name);
// })




//new WeakSet();

// let students = new WeakSet(['Abbos']);

// // let one = {name: 'Abbos'};
// // let two = {name: 'Madina'};

// console.log(students.has(Abbos));






// new Map ();

// let deviceColor = new Map();

// // => malumot qoshish! (set)
// deviceColor.set('phone', 'black');
// deviceColor.set('laptop', 'silver');

// console.log(deviceColor);



// => key orqali valuni olish uslubi

// let deviceColor = new Map();
// deviceColor.set('phone', 'black');
// deviceColor.set('laptop', 'silver');
// console.log(deviceColor);

// console.log(deviceColor.get('phone'));
// console.log(deviceColor.get('laptop'));

// console.log(deviceColor.size);   => size yani lengni olish 

// =======================

// keys(), values(), entries()


// let deviceColor = new Map();

// deviceColor.set('phone', 'black');
// deviceColor.set('laptop', 'silver');

// console.log(deviceColor.keys());
// console.log(deviceColor.values());
// console.log(deviceColor.entries());    => har bitta key bn valueni bir arrayga solib beradi




// delete(), clear()

// let deviceColor = new Map();

// deviceColor.set('phone', 'black');
// deviceColor.set('laptop', 'silver');


// // deviceColor.delete('phone')
// // deviceColor.clear();

// console.log(deviceColor);



//=====================================================

// looping over map() key/values;

// let deviceColor = new Map();

// deviceColor.set('phone', 'black');
// deviceColor.set('laptop', 'silver');

// deviceColor.forEach((value, key, map) => {
//     console.log('value:', value);
//     console.log('key:', key);
//     console.log('map:', map);
// })


//======================

// for of

// let deviceColor = new Map();

// deviceColor.set('phone', 'black');
// deviceColor.set('laptop', 'silver');

// for(let entries of deviceColor) {
//     console.log(entries);
// }


//==========================================

// object as a key   => new Map da objectni key sifatida ishlatish imkoni boladi!


// let deviceColor = new Map();

// deviceColor.set('phone', 'black');
// deviceColor.set('laptop', 'silver');
// deviceColor.set({}, 'My key is an object');

// console.log(deviceColor);

///////////////////////////////////////////////////////////////////////////////






