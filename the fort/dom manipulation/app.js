// console.log("hello world");


// const head = document.querySelector("#head");
// console.log(head.innerHTML);
// const name= prompt("enter your name");
// function greetUser()
// {
  
//     head.innerHTML = "hello " + name;
    
// }


// const em= document.querySelector("#email");
// const pw= document.querySelector("#password");

// function showPass()
// {
//     console.log(em.value);
//     console.log(pw.value);
//     em.value="";
//     pw.value="";

// }

// const n1 = document.querySelector("n1");

// const n2 = document.querySelector("n2");

// function showSum()
// {   
//     // console.log(+n1.value + +n2.value);
//    const sum = +n1.value + +n2.value;
//    console.log(sum);
// }

let grocery = ["flour", "eggs", "mangoes", "rice"];




const v1= document.querySelector("#addval1");

// const v2= document.querySelector("#addval2");
// const v3= document.querySelector("#addval3");

function addValue()
{
    grocery.push(v1.value);
    console.log(grocery);
}


