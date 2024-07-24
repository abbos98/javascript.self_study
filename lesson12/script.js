// let user = {
//     age:20,
//     child: {
//         age:30,
//         child: {
//             age:30
//         }
//     }
// }

// sum = 0;

// const getAge = (obj) => {
//     sum += obj.age;
//     if(obj.child) {
//         getAge(obj.child)
//     }
// }
// getAge(user);

// console.log(sum);


// new Set dan foydalanmay dooplecatelarni olib tashlash!

// let arr = [5, 5, 6, 6, 7, 7, 'a', 'a'];

// const removeDuplicates = (data) => {
//     return data.filter((value,index) => arr.indexOf(value) === index);

// }

// console.log(removeDuplicates(arr));


////////////////////////////////////////////////////////////////////////////

// <<<<<<<<<< Scopes => global, function, block >>>>>>>>>>>>

// function scope 

// var n = 5;
// console.log(n);

// function myFunc() {                        
//     n = 10;
// }
// // // Agar function chaqirilmasa qiymatini olmaydi!

// console.log(n);
// myFunc();
// console.log(n);


// var n = 5;
// console.log(n);

// function myFunc() {                        
//     var n = 10;        //function scope(bu narsa faqat functioning ichida boladi!)
//     console.log(n);
// }

// console.log(n);
// myFunc();
// console.log(n);
// 5 ciqadi va buning sababi dunction ning ichidagi qiymatga kira olmaydi!


// function myFunc() {                        
//     var n = 10;  
//     console.log(n);      
// }

// myFunc();
// console.log(n);

// bu holatda qiymat chiqmaydi sababi functionning ichidagina boladi! shu sababli kirolmaydi!(tashqarida mavjud bolmaydi)



// function myFunc() {
//     var num = 100;       //function scope
//     let num = 200;       //function scope
//     const num = 400;     //function scope 
// }

// myFunch();
// console.log(num);

// => ichgariga access qila olmaydi!





// <<<<<<< Block Scope >>>>>>>>>

// => functiondan tashqari bolgan gulli qavs block scope hisoblanadi

   //  <<<<< if/else, fir/while/do-while loops, switch/case >>>>>>

   
   // console.log tashqarida bolsa ishlamidi
    // {
    //     var first = 'Html';
    //     let second = 'Js';
    //     const third = 'React';

    // }
    
    // console.log(first);
    // console.log(second);
    // console.log(third);






    // console.log ichkarida bolsa iwlidi!

    // {
    //     var first = 'Html';
    //     let second = 'Js';
    //     const third = 'React';

    // console.log(first);
    // console.log(second);
    // console.log(third);

    // }
    
    

    // If else with block scope

    // if(true){
    //         var first = 'Html';
    //         let second = 'Js';
    //         const third = 'React';
    
    //     }

    //     console.log(first);    //only var can do something
    //     console.log(second);
    //     console.log(third);



    // if(true){
    //    var first = 'Html';
    //    let second = 'Js';
    //    const third = 'React';

    //    console.log(first);   
    //    console.log(second);
    //    console.log(third);
            
 // }


 ///////////////////////////////////////////////////////////////////////////


 // <<<< Getter(get)/ Setter(set)

//  const person = {
//     firstname: 'Abbos',
//     lastName: 'Begmatov',

//     get fullName() {                                          // get shunda functionni oddiy key holatida olib beradi!
//         return `${this.firstname} ${this.lastName}`
//     },
//     set fullName(value) {                                          
//        this.firstname = value;          //functionning qiymatini ozgartirishga tashqaridan turib imkon beradi !
//     }
//  }

//     person.fullName = 'someone';


//     console.log(person.fullName);                             //chaqirganda qavisiz chaqirish kk!
           




