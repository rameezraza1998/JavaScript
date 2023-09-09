/// let FavNum = prompt("Enter your favourite number !");

 // console.log(Number(FavNum) + 5);



 // comparasion operators
 // 1 ==
// 2 != or !=
 // 3 >=
// 4 <=
// 5 > /<

 // console.log(5 === "5"); to compare in JS always use triple equals to type check krna k liyeh 
// like string or number ko comapare kar kay batadyega

 // console.log(5 !==  6);

// let num1 = 5;
// let num2 =2;
// console.log(num1 <= num2);


 //Multiple conditions through if and else

// let YourAge = +prompt("Enter your age");  //here we use + for number type without + it will be string
// if (YourAge >= 18) {
//     console.log("you are eligible to vote");

// } 
// else {
//     console.log("you are not eligible to vote");
// }

// GAME OF GUESSING NUMBERS
// alert("press OK to begin with game");
// let YourNum = prompt("Enter Nuumber");
// let RandomNumber = Math.round(Math.random() *10 );

// if (YourNum === RandomNumber) {
//     console.log("You guess it correct");
// } else {
//     console.log("Try again");
//     console.log(RandomNumber);
// }


let YourNum = +prompt("Enter Nuumber");
let RandomNumber = Math.round(Math.random() *10 );

if (RandomNumber%2 ===  0 && YourNum%2===0) {
    console.log("Number is even" + RandomNumber);
} else {
    console.log("number is odd " + RandomNumber);
   
}


