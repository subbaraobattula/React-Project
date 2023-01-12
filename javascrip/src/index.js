
variables& dataTypes
var a="1";                //Ex:1
for (let i=0;i<5;i++){
   console.log(i)
}

  var a="subbu";
for(var i=0;i<5;i++){
    console.log(i)           //Ex:2
}
console.log(i)
console.log(typeof a);

var a=25;
for(const i=0;i<5;i++){     //Ex:3
    console.log(i)
}
console.log(i)
console.log(typeof a);




Functions
function printname(){
   console.log("subbu battula");
}
printname();
//Auto invoked function
(function(){
   console.log("subbu auto")
})();

//variable
let prints=function(){
   console.log("subbu variable")  //
   return "abc"
}
console.log(prints);

let print=function(){
  console.log("subbu variable")
   
}
print();

//parameters passing function
function printfullname(firstname,lastname){
   return firstname+""+lastname;

}
letfullname:printfullname("subbu","battula");

function iseven(number)
{
   let iseven=(number%2===0);
   return iseven
}
  

//objects
//let obj={};
let company={name:"ziraff",age:"20",email:"subbu@123.com",};
console.log(company.name);


const subbu={a:[1,3,5,7],b:"ap",c:true};
console.log(obj.a.reduce(prevalue,value)=>{
   return prevalue+value
},o));

company.person{name:"subbu"}
console.log(company.person);

const items=[{name:'bike',price:100},
            {name:'Tv',price:200},
            {name:'Album',price:85},]

filter
const lessthen=items.filter((item)=>{
return item.price<=100
},)
console.log(lessthen)
console.log(items)
map
const itemnames=items.map((item)=>{
   return item.name
})
console.log(itemnames)

const itemprice=items.map((item)=>{
return item.price
})
console.log(itemprice)
find
const finditem=items.find((item)=>{
   return item.name==='Book'
})
console.log(finditem)
//string
const number=["12","15","20","17","24"]
let text="";
for(let i=0;i<names.length;i++){
text+=names[i]+"<br>";
}
document.getElementById("demo").innerHTML=text;

//Date

const d=new Date();
document.getElementById("demo").innerHTML=d.getTime();




