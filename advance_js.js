// // spread operator
// const globalplayer=
// {
//     id:1,
//     name:"rahul",
//     age:40
// }
// let player1={...globalplayer};
// player1.name="thanzeer";
// console.log(player1)
// console.log(globalplayer)

// const global=["thanzeer","vishnu","unnimaya","bincy"];
// const [first,second,third,forth]=global;
// console.log(second);
// const global ={
//     name:"thanzeer",
//     id:20,
//     age:45
// };
// const {age,...rest}=global;
// console.log(rest);
 
// function abc()
// {
//     console.log("running");
// }
// abc();

const varname=[{
     id:1,
     name:"rahul",
     age:40
},
{
    id:2,
    name:"thanzy",
    age:23
},
{
    id:3,
    name:"vishnu",
    age:22
},
{
    id:4,
    name:"bincy",
    age:10
}
]
// for(let i=0;i<varname.length;i++)
// {
//     console.log(varname[i])
// }

// varname.forEach((perukal,index,array)=>console.log(perukal));

// mapping method.....

// const newArray =varname.map((Array)=>Array.name);
// console.log(newArray)

//  mapping used by for loop......
// const newArray=[];
// for(let i=0;i<varname.length;i++)
// {
//     newArray.push(varname[i].name);
// };
// console.log(newArray);



//filter method........
// const newArray=varname.filter((value)=>value.age>=20);
// console.log(newArray);


// reduce method......

// const numberArray=[1,8,4,9,6,4,45,7,8];
// let newArray=numberArray.reduce((total)=>0);
// console.log(newArray);

// find method...........

// let newObj=varname.find((value)=>value.name==="vishnu");
// console.log(newObj);

const nameArray=["a","c","e","rt","aaa","aab"];
nameArray.sort();
console.log(nameArray);
const numberArray=[45,9,8,4,78,12,1,0,89,25];
numberArray.sort((a,b) => a-b);
console.log(numberArray);