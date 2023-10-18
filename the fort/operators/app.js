

// let stdId = "45";
// let id = +(stdId);
// console.log(id + 10);
// console.log(typeof (id));



// let FirstNum = "25";
// let SecondNumber = 10;

// console.log(Number(FirstNum) + SecondNumber);


// let Id =1;

// let $id = Boolean(Id);
// console.log($id);

// idhr agar hum id ma kuch pass nai kr rhe ya assign nau kr rhe ha value toh 
// it means wo  kuch return nai kr rha  means 0 ya false ya agar value pass karta ha ya assign karta ha toh true ya 1 ata!!!


// let UserId = +prompt("enter here");
// console.log(typeof(UserId));

let StdName = prompt("Enter name here: ");

let chem = +prompt("chem marks");
let maths = +prompt("maths marks");
let eng = +prompt("english marks");
let urdu = +prompt("urdu marks");
let physics = +prompt("physics marks");

let total_marks = 500;

let perecentage = ((chem + maths + eng + urdu + physics)/total_marks )* 100;

console.log(StdName + " got this perecenatge: "+ perecentage+"%");