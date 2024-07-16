// console.log("rahhiol");

// alert(2+2)      //null is a object


// conversion 

// let num = "23as"
// let numString = Number(num)
// console.log( numString);

/*
primitive: 7 types  these all are call by values 
Number, String, boolean, null, undefined, symbol, bigInt
symbol will give unique id


memory management 
stack : primitive data  if u change anyone it willl not change becz it provide copy
heap : non primitive  but here its gives reference to the object if u cange anything it will affect to all



*/

// let fname = "Rahul"
// let lname = "      Ganiger      "

// console.log(fname+lname);
// console.log(`I'm ${fname.length} ${lname.trim()}`); //u can use backstrip for string concatination it will provide method also

// const a = 2.78
// console.log(Math.floor(a));
// console.log(Math.random() * 10 + 1);

// const min = 100
// const max = 200
// console.log(Math.floor(Math.random() * (max-min+1) + min)); // to get random number bw any specified value then use this general syntax


// console.log(Math.ceil(7.0000000000000000
//     9));



// date and time
// const myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString('default', {
//     dateStyle: "long"
// }));


// array

// let boys = ['rahul', 'ram']
// let girls = ['usha', 'nisha']
//  let a = boys.push(girls)
//  console.log(boys[2][1]);   it will take array as ip so use concat it will give new array
// // let a = boys.concat(girls)
// // console.log(a[3]);

// const g = [1,2,4,5]

// let b = [...boys, ...girls , ...g]        //spread operator
// console.log(b);

// objects

// const mySymbol = Symbol("key1")
// const obj1 = {                 //not a singlrton object
//     "name":"rahul",
//     age:24,
//     mySymbol:"my key",
//     [mySymbol]:"key",
//     profession:"developer"
// }

// console.log(obj1['name']);
// console.log(obj1.name);
// console.log(obj1.mySymbol);
// console.log(obj1[mySymbol]);

// const obj2 = new Object()     //this is a singleton object


// const a = {1:'a', 2:'b'}
// const b = {2:'a', 3:'b'}
// const c = {4:'a', 5:'b'}
// const d = {a,b}
// console.log(d);   //object inside the object
// const e = Object.assign({},a,b,c)   //assign method u can use or else spread
// // console.log(e);
// const f = {...a, ...b}
// // console.log(f);
// console.log(Object.keys(a));     //u can access key and values of objects it will give in the array type 
// console.log(Object.values(a));



// object destructuring  { } curly braces used for both araay and object destructring it will helpful in react

// const student = {
//     name:"ram",
//     age:27,
//     gender:"female"
// }

// console.log(student.name);
// const{name} = student               //object destructring
// console.log(name);
// const{gender,age} = student               //object destructring multiple properties at once
// console.log(gender,age);


// functions

// function addPriceCart(...n){    // u can use the rest args operator to give any no of arguments it will collect and store as array
//     return n
// }

// console.log(addPriceCart(2,3,500,60000));



// function addPriceCart1(val1,val2, ...n){    // u can use the rest args operator to give any no of arguments it will collect and store as array
//     return n
// }

// console.log(addPriceCart1(2,3,500,60000));   //the first 2 values goes in val1 and val2



// arrow functions
// console.log(add(1,3));         //hoisting

// function add(a,b){
//     return a + b
// }


// // console.log(a(1,3));      //it will throw error

// let a = function add(a,b){
//     return a + b
// }

// console.log(a(1,3));         



// function outer(){
//     console.log(this);
//     let a = function inner(){
//         console.log(this);
//     }
//     // a()
// }
// outer()

// console.log(this);


// let b = (a,b)=>{console.log("hi"); console.log(a+b);}
// b(1.4)



// immediately invoked function expression(IIFE)

// (function greet(){
//     console.log("hi");
// })();      // here u hv to use semicolon the IIFE do not where to stop if u nt give it will throw error

// ( () => {
//     console.log("hello");
// })()

// falsy values: false, null. NaN, BigInt 0n, "",0, -0, undefined
// strings comes under truthy values: "false"," ", "0", []

//higher order loops

// let arr = [1,3,4,5,5,6,]
// arr.forEach( (e) => {
//     console.log(e);
// })

// function print(e){
//     console.log(e);

// }

// arr.forEach(print)


// let course = [
//     {
//         "courseName" : "js",
//         "price" : 1000
//     },
//     {
//         "courseName" : "python",
//         "price" : 2000
//     },
//     {
//         "courseName" : "css",
//         "price" : 100
//     }
// ]

// course.forEach( (item) => {
//     console.log(item["courseName"])      //if u want to use [] the key should be string
//     console.log(item["price"]);
// })

 
// let arr = [1,3,4,5,6,7,79]
// const arr2 = arr.map( (a) => a+5)     //u can apply any method here method chaining it will print the last method op
//             .map( (b) => b*10)
//             .filter( (c) => c > 80) 
            
//             console.log(arr2);

// let nums = [122, 345, 2000, 300]
// let inVal = 0                        //FOR REDUCE to work u need to give initial value and its takes accumulator and current val
//                                      //at start accumalator will be initial val and then it add current val to that  and it goes on
// let b = nums.reduce( (acc,curr ) =>     
// {
//     return acc+curr
// },1)
// console.log(b);


// const arr2 = arr.forEach( (b) =>     //for each loop will not give new array rather use map
// {
//     return b
// } )
// console.log(arr2);



const a = document.getElementById("one").innerHTML("By hitesh chai or code")
console.log(a);

// DOM : Document Object Model
// innerText:give only showing content
// innerContent : give whole content with hidden data
//innerHTML : give with tag

// when u use queery selector all it willl give node list u can access those like this store it in any variable 
// for ex
// list[0].style.color = "red"
// for HTMLCollection u hv to convert it into array using method Array.from()  then u can loop over it