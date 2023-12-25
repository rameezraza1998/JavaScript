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