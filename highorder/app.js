// for of

// const array = [1,2,3]

// for (const i of array) {
//     console.log(i);
// }

// const name = ['ali','hussain']
// for (const j of name) {
//     console.log(j);
// }

// const b = 'ali hussain'
// for (const a of b) {
//     console.log(a);
// }

// const c = 'ramis'
// for (const iterator of c) {
//     console.log(iterator);
// }

// MAP  

// const map = new Map();

// const ab=['1','2','3']

// map.set('ac',ab)

// console.log(map.get('ac'));

// const fruits = {
//     name: "popgreanaite",
//     id: "turk123",
//     apple:{
//         grape:"red"
//     }
// }
// map.set('fruits', fruits)
// console.log(map.get('fruits').apple.grape);

// map.set('ind','india')
// map.set('uk','united kingdom')
// map.set('pak','pakistan')
// map.set('pak','pakistan')

// console.log(map.get('ind'));
// console.log(map);

// for (const [key,value] of map) {

//     console.log(key,'=>',value);

// }


// const game = {
//     game1: "nfs",
//     game2: "subway surfers",
//     js: "javascript",
//     cpp: "c++"
// }


// for (const [key,value] of Object.entries(game)) {
//     console.log(`${key} => ${value}`);
// }

// const fruits = {
//     name: "popgreanaite",
//     id: "turk123",
//     apple:{
//         grape:"red"
//     }
// }

// for (const [key,value] of Object.entries(fruits)) {
//     console.log(`${key} => ${value}`);
// }

// for (const [key,value] of Object.entries(fruits.apple)) {
//     console.log(`${key} => ${value}`);
// }



// for in loop

// const fruits = {
//     name: "popgreanaite",
//     id: "turk123",
//     apple:{
//         grape:"red"
//     }
// }

// for (const key in fruits) {
//     console.log(key,fruits[key]);
// }


// for (const key in fruits.apple) {
//     console.log(key,fruits.apple[key]);
// }


// const game = {
//     game1: "nfs",
//     game2: "subway surfers",
//     js: "javascript",
//     cpp: "c++"
// }

// for (const key in game) {

// console.log(key,game[key]);
// }


// const a =  ['1','2','3','4']

// for (const i in a) {
//  console.log(i,'=>',a[i]);  
// }


// for each 

// for Array

// const coding = ["js", "cpp", "java", "python"]

// coding.forEach(function (i) {
//     console.log(i);
// })


// coding.forEach((i) => {
//      console.log(i);
// })

// function print(i) {
//     console.log(i);
// }
// coding.forEach(print)



// FOR OBJECTS
// const user1=[
//     {
//         id:1,
//         name:"ali"

//     },
//     {
//         id:2,
//         name:"m.ali"

//     },
//     {
//         id:3,
//         name:"ally"

//     }
// ]

// user1.forEach( (i) => {

//     console.log(i.id);
//     console.log(i.name);
// }) 

// const game = [{
//     game1: "nfs",
//     game2: "subway surfers",
//     js: "javascript",
//     cpp: "c++"
// }]

// game.forEach( (i) =>
// {
//     console.log(i.game1);
// } )


// const game = {
//     game1: "nfs",
//     game2: "subway surfers",
//     js: "javascript",
//     cpp: "c++"
// };

// Object.keys(game).forEach((key) => {
//     console.log(key,game[key]);
// });
