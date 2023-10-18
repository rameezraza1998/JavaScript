/// let FavNum = +prompt("Enter your favourite number !");

 // console.log(Number(FavNum) + 5);



 //                                                 comparasion operators
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


 //                                         Multiple conditions through if and else

// let YourAge = +prompt("Enter your age");  //here we use + for number type without + it will be string
// if (YourAge >= 18) {
//     console.log("you are eligible to vote");

// } 
// else {
//     console.log("you are not eligible to vote");
// }

//                                              GAME OF GUESSING NUMBERS

// alert("press OK to begin with game");
// let YourNum = prompt("Enter Nuumber");
// let RandomNumber = Math.round(Math.random() *10 );

// if (YourNum === RandomNumber) {
//     console.log("You guess it correct");
// } else {
//     console.log("Try again");
//     console.log(RandomNumber);
// }


// let YourNum = +prompt("Enter Number");
// let RandomNumber = Math.round(Math.random() *10 );

// if (RandomNumber%2 ===  0 && YourNum%2===0) {
//     console.log("Number is even " + RandomNumber);
// } 

// else if (RandomNumber%2 !==  0) {
//     console.log("number is odd " + RandomNumber);
// }
// else{
//         console.log("you lose " + RandomNumber);
// }

//                                              FOR LOOP 
   
// for (let i=1; i<11; i++) {
//     // console.log("hello world");
//     // console.log(" 2X"+i + "="+ 2*+i);
//     console.log(i);

// }

//                                                    ASSIGNMENT

let Units = +prompt("pls enter your units");

if (Units>=1 && Units<=50 ) {
    console.log("For first 50 units Rs. 0.50/unit so your bill of "+Units+" is Rs"+0.50*+Units );
    
} 
else if(Units>50 && Units<=100 ) {
    console.log("For first 100 units Rs. 0.75/unit so your bill of "+Units+" is Rs"+0.75*+Units );
}
else if(Units>=101 && Units<=250 ) {
    console.log("For first 50 units Rs. 1.20/unit so your bill of "+Units+" is Rs"+1.20*+Units );
}
else if(Units>25 ) {
    console.log("For first 250 units Rs. 1.50/unit so your bill of "+Units+" is Rs"+1.50*+Units );
}




