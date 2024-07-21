// String 

// let str = 'Webbrain';
// console.log(str[0]);


// let str = 'Webbrain';
// console.log(str.length);

// let str = 'Webbrainsdasdoaisd';
// console.log(str[str.length -1]);

// let str = "'Kamolova' Madina";

// console.log(str);

///////////////////////////////////////////////////////
// let title = 'Webbrain';
// let status = title + " " + 'Academy';

// console.log(status);

// let title = 'Webbrain';
// let status2 = "Abbos";
// let status = `${title} ${status2} Academy`;

// console.log(status);
////////////////////////////////////////////////////////////


// let status = 'Webbrain \t Academy';
// let status = 'Webbrain \r Academy'

// console.log(status);


/////////////////////////////////////////////////////////////////////////

// <<<<< String methods >>>>>>>

// let title = 'Webbrain';

// // let to = title.toLowerCase();
// // let to = title.toUpperCase();

// console.log(to);


// let title = 'Webbrain     ';

// let to = title.trim();

// console.log(to.length);


// let title = 'Abbosbek';

// let starting = title.startsWith('A');
// console.log(starting);


// let title = 'Abbosbek';

// let end = title.endsWith('k');

// console.log(end);


// let title = 'Abbosjon';

// // let to = title.replace('jon', 'bek');
// // let to = title.repeat(10);

// console.log(to);


// => concat ();

// let title = 'Webbrain';
// let status = 'Academy';

// let to = title.concat(status);

// console.log(to);


// => includes();

// let title = 'Webbrain';

// let to = title.includes('e');

// console.log(to);


// =>indexOf

// let title = 'Webbrain';

// let to = title.indexOf("n");

// console.log(to);


// => lastindexOf();

// let title = 'Webbrain';

// let to = title.lastIndexOf('b');

// console.log(to);


// => charAt(2);

// let title = 'Webbrain';

// let to = title.charAt(1);

// console.log(to);


// => substring(0, 4); >>>> 2ta qiymat oladi!

// let title = 'Abbosbek';

// let to = title.substring(2, 5);

// console.log(to);


// => slice(3, 6);

// let title = 'Abbosbek';

// let to =title.slice(0,4);

// console.log(to);
////////////////////////////////////////////////////////////

// <<<< Regax >>>>>

// => match(/[A-Z]/g)   >>> katta hariflarni chiqaradi ARRAYDA QAYTARADI!

// let str = 'WeBbrain';

// let upperCases = str.match(/[A-Z]/g);

// console.log(upperCases);


// => match (/[a-z]/g) >>> kichkina hariflarni chiqaradi ARRAYDA QAYTARADI!

// let str = 'WeBbrain';

// let lowerCases = str.match(/[a-z]/g);

// console.log(lowerCases);


// => match (/[0-9]/g)   >>> sonlarni ajratib beradi!

// let str = 'Ab2bos98aka';

// let to =str.match(/[0-9]/g);

// console.log(to);


// => join(""); arrayni stringga ogirib beradi

// let str = 'AbbosBek';

// let to = str.match(/[A-Z]/g);
// let toString = to.join("");

// console.log(toString);

/////////////////////////////////////////////////////////////////////

//  <<<< Number >>>>

// console.log(10 % 5);  

// console.log(2 ** 4);

// console.log(25 ** (1/2));

// console.log(25 ** 0.5);


// <<<< Number methods >>>>

// => isinteger (); qoldikli sonlarni yoki qoldiqsiz sonlarni qaytaradi (true/false)

// let num = 100;

// let check = Number.isInteger(num);

// console.log(check);


// => parsInt (); qoldiqli sonni butun songa ogirib beradi!

// let num = 100.10;

// let to = Number.parseInt(num);

// console.log(to);


// let num = 100.1020;

// let to = num.toFixed(1);

// console.log(to);

////////////////////////////////////////////////////

// let str = 'Hey';

// console.log(+str);