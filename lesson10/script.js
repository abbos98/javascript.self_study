// let arr = ['a', 'b', 'c'];
// let str = 'WBA';

// console.log(arr.join("")); 
// console.log(arr.concat('d'));
// console.log(str.split(""));     // => array qilib qaytaradi


// let arr =['Abbos', 'Madina', 'Aziz'];

// arr.slice(0, 2);
// arr.splice(0, 2)

// console.log(arr);


///////////////////////////////////////////////////////

//array advanced methods 
// let arr = [2, 8, 1, 4, 9, 10, 435,];

// // console.log(arr.sort((a, b) => a - b));    // 1-usul

// console.log(arr.sort(function(a, b) {        // 2-usul
//     return a - b
// }));


// let arr = ['c', 'b', 'a'];

// console.log(arr.sort( (a, b) => a.localeCompare(b)));
// console.log(arr.sort((a, b) => b.localeCompare(a)));

// console.log(arr.sort(function(a, b) {
//     return a.localeCompare(b)
// }));


// let str = 'WBA';

// console.log(str.split("").reverse().join(""));


// let str = 42058;

// console.log(+str.toString().split("").sort().join(""));


// <<<<<<<< map() >>>>>>>>

// let arr = ['Jahongir', 'Abbosbek', 'Sardorbek'];

// let checking = arr.map((value) => {
//     return 'WBA'
// });

// console.log(checking);
// // arr.map((value, index, array) => {
// //     console.log(index);
// // });


// <<<<<<< forEach() >>>>>>>

// let arr = ['Jahongir', 'Abbosbek', 'Sardorbek'];


// arr.forEach ((value, index, array) => {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// });


// <<<<<< filter() >>>>>>>>

// let arr = [38,58,38,23,49,59];

// let newArr = arr.filter((value) => value >= 25);

// console.log(newArr);




// let arr = [38,58,38,23,49,59];

// let newArr = [];
// arr.map((value) => {
//     if(value !== 25) {
//         newArr.push(value)
//     }
// });

// console.log(newArr);





// <<<<<< find() >>>>>>>

// let arr = [38,58,38,23,49,59];

// let newArr = arr.find((value) => value === 38);

// console.log(newArr);


// <<<<<< fill() >>>>>>>>>

// let arr = [38,58,38,23,49,59];

// let newArr = arr.fill(100);

// console.log(newArr);