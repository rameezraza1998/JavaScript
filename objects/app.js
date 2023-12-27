// // // // console.log('hello objects');


// // // // const obj = {
// // // //     name: 'abdullah',
// // // //     age: 20,
// // // //     isLoggedIn: true
// // // // }


// // // // obj.name = 'usman';
// // // // obj.addedKeys = true
// // // // delete obj.name
// // // // // console.log(obj["name"]);
// // // // console.log(obj);













// // // // const user = {
// // // //     name:'Muhammad Abdullah',
// // // //     age:20,
// // // //     loggedIn:['monday' , 'tuesday'],
// // // //     greetUser: function (){
// // // //         console.log('hello user')
// // // //         console.log(this.name);
// // // //     }
// // // // }
// // // // user.greetUser()
// // // // console.log(user.loggedIn[1]);










// // // // const car = {
// // // //     name: 'Civic',
// // // //     brand: 'Honda',
// // // //     model: 2021,
// // // //     colour: 'white',
// // // //     accesories:['frontBumper' , 'mirror']
// // // // }
// // // // console.log(car);
// // // // Object.freeze(car);
// // // // car.brand = 'Toyota';
// // // // console.log(car);










// // // const nestedObject = {
// // //     prop1: 'value1',
// // //     prop2: {
// // //       prop21: 'value21',
// // //       prop22: {
// // //         prop221: 'value221',
// // //         prop222: {
// // //           prop2221: 'value2221',
// // //           prop2222: {
// // //             prop22221: 'value22221',
// // //             prop22222: {
// // //               prop222221: 'value222221',
// // //               prop222222: {
// // //                 prop2222221: 'value2222221',
// // //                 prop2222222: {
// // //                   prop22222221: 'value22222221',
// // //                   prop22222222: 'ya wali value chahya',
// // //                 }
// // //               }
// // //             }
// // //           }
// // //         }
// // //       }
// // //     },
// // //     prop3: {
// // //       prop31: 'value31',
// // //       prop32: {
// // //         prop321: 'value321',
// // //         prop322: {
// // //           prop3221: 'value3221'
// // //         }
// // //       }
// // //     }
// // //   };

// // // //   console.log(nestedObject);


// // //   console.log(nestedObject.prop2.prop22.prop222.prop2222.prop22222.prop222222.prop2222222.prop22222222);




// // let complexObject = {
// //     person: {
// //         name: {
// //             first: "John",
// //             last: "Doe",
// //         },
// //         age: 30,
// //         address: {
// //             street: {
// //                 number: 123,
// //                 name: "Nested Street",
// //             },
// //             city: "Nested City",
// //             country: "Nested Country",
// //         },
// //     },
// //     work: {
// //         company: {
// //             name: "TechCorp",
// //             location: {
// //                 city: "TechCity",
// //                 country: "TechCountry",
// //             },
// //         },
// //         position: "Senior Developer",
// //         projects: [
// //             {
// //                 name: "Project A",
// //                 technologies: ["JavaScript", "React", "Node.js"],
// //             },
// //             {
// //                 name: "Project B",
// //                 technologies: ["Python", "Django", ["new" , ["postgresql"]]],
// //             },
// //         ],
// //     },
// //     hobbies: {
// //         indoor: ["Reading", "Chess"],
// //         outdoor: ["Hiking", "Cycling"],
// //     },
// // };

// // console.log(complexObject.work.projects[0].technologies[2]);







// function createObject (name , age){
//     this.name = name;
//     this.age = age;
// }

// const obj = new createObject('abdullah' , 20)

// console.log(obj);








// const gym = {
//     name: 'mik',
//     price: 2000,
//     discount: function (numberOfClients){
//         if(numberOfClients > 2){
//             const discountPrice = this.price * 10 / 100 
//             console.log(price - discountPrice);
//         }
//         else{
//             console.log(this.price);
//         }
//     }

// }



// gym.discount(5)



















// object singelton

// const appuser = new Object()

// non singelton 
const appuser = {}

appuser.id="123abc"
appuser.name="ramis"
appuser.isloggedin=true
// console.log(appuser);

const newapp={
    email:"ali@",
    id:56,
    fullname: {
        userfullname:{
            f_name:"Ramis",
            l_name:"Raza"
        }
    }
}

// console.log(newapp.fullname.userfullname.f_name);
// console.log(newapp.fullname.userfullname.l_name);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d" }
const obj3 = {5:"e",6:"f",...obj1, ...obj2}
// const obj3 =  Object.assign({}, obj1, obj2)
//spread operator
// const obj4 ={...obj1,...obj2,...obj3}
console.log(obj1);

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
// console.log(user1[0].name);
// console.log(appuser.hasOwnProperty('id'));
// console.log(Object.keys(appuser));
// console.log(Object.values(appuser));
// console.log(Object.entries(appuser));