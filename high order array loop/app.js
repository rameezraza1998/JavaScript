// for of

// array of objects:
// let ar = [{},{},{}]


// const array = [1,2,3,4,5]
// const array = "hello world"
// const array = ["hello world", "hi"]

// for ( const i of array)
// {
//     console.log(i);
// }



// MAPS
// only gives unique values not repetion

const map = new Map()
// map.set('ind','india')
// map.set('uk','united kingdom')
// map.set('pak','pakistan')
// map.set('pak','pakistan')

// console.log(map);

// // for of 
// for (const [key,value] of map)
// {
//     console.log(key, '=>' , value);
// }
// console.log(map.values);

const game = {
    game1: "nfs",
    game2: "subway surfers",
    js: "javascript",
    cpp: "c++"
}


// this for of doesnt work like this in objects but work in maps & array

// for (const [key,value] of game) {
//     console.log(key, "->",value);
// }

// for in loop works in objects, array but not in map
// for (const key in game) {
 
//         console.log(`${key} shortcut for ${game[key]}`);
// }


// const array = [1,2,3,4,5]

// for ( const key in array)
// {
//     console.log(array[key]);
//     console.log(key);
// }


// for each 

const coding = ["js", "cpp", "java", "python"]
// call back function doesnt have its name
// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach(  (item) =>{
//     console.log(item);
// } )

// printing through function by using for each

// function print(item)
// {
//     console.log(item);
// }
// coding.forEach(print)



// coding.forEach(  (item, index , arr) =>{
//     console.log(item,index, arr);
// } )



const user1=[
    {
        id:1,
        name:"ali"

    },
    {
        id:2,
        name:"m.ali"

    },
    {
        id:3,
        name:"ally"

    }
]

// user1.forEach( (item, index, arr)=> {
//     console.log(item,index, arr);
// })



user1.forEach( (item)=> {
    console.log(item.id);
})

user1.forEach( (item)=> {
    console.log(item.name);
})