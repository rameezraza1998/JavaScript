// const coding =['js','app','py','cpp']

// const a = coding.forEach( (item) => 
// {
//     // console.log(item);
//     return item
// } )

// console.log(a);


// filter basically return values
// const Mynums =[1,2,3,4,5,6,7,8,9,10]

// const newNo = Mynums.filter( (num) => num > 4 )

// const newNo = Mynums.filter( (num) => {
//     return num > 4
// } )

// same work like filter using foreach
// const newNo = []
// Mynums.forEach( (i) => {
//     if (i > 8) {
//         newNo.push(i);
        
//     }

// } )
// console.log(newNo);



// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// let abc = books.filter( (bk) => bk.genre === 'History')

// abc = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === 'History'

// })
// console.log(abc);  


// MAP

const map = new Map()

const Mynums =[1,2,3,4,5,6,7,8,9,10]

// let no = Mynums.map( (num) => num + 10 )
// console.log(no); 

// function addArrItem(arr){
 

//     const arr2 = []
//     for (let i = 0; i < arr.length; i++) {
//         arr2.push(arr[i] + 10);
//     }
//     return arr2
// }

// function addArrItem(arr){
//     if(arr.length !== -1){
//        return arr.map((item) => item+10)
//     }

   
// }

// console.log(addArrItem(Mynums));


// let newNumbers = Mynums.map( (no) => no+10 ).map( (num) => num*20 ).filter( (num) => num >=400 )

// console.log(newNumbers);


// REDUCE

const array1=[1,2,3,4]

// const total = array1.reduce( function (acc,currval) {
//     console.log(acc,'+',currval);
//     return acc + currval
// }, 0)


// const total = array1.reduce(  (acc,currval) => acc+currval, 0)


// console.log(total);


// ADD TO CART METHOD

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
