// let img ;
// function first (x,y)
// {
//     sum=x+y;
//     console.log("jhbfdjvbdfj");
//     return sum;
// }
// let vary = first (4,5);
// console.log(vary);

// const mul = (a,b)=>{
//     sum = a*b;
//     return sum;
// }
// let mule =mul (5,4);
// // console.log (mul);
// console.log(mule);

//  let div =document.querySelector("div"); 
// div.style.backgroundColor="black";
// div.style.color="white";
// div.style.padding="4%";
// div.style.width="300px";
// div.style.height="300px";

// let btn = document.createElement("button");

// btn.innerText="hey";
// div.append(btn);
// let mode="light";
// let doc=document.querySelector("body");
// btn.addEventListener("mouseover",() => {
//     if(mode==="light")
//     {
//         console.log("now its dark");
//         mode ="dark";
//        doc.style.backgroundColor="black";
//     }
//     else{
//         console.log("now its light");
//         mode ="light";
//         doc.style.backgroundColor="white";

//     }
// });

// const student = {
//     name: 'ankush ',
//     roll: 46654654,
//     there()
//     {
//         console.log ("jfdbkjn");
//     }

// };

// const karnaarjun ={

//     hey (){
//         console.log("jdskjn");   
//     }
// }
// karnaarjun.__prototype__=student;

let mod = document.querySelector("#mode");
let val = "dark";

mod.addEventListener("click", () => 
{
    if (val === "light") 
    {

        document.querySelector("body").style.backgroundColor = "black";
        


        val = "dark";
    }
    else
    {
        document.querySelector("body").style.backgroundColor = "white";


        val = "light";
    }
});
