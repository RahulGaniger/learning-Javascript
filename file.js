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

const student = {
    name:"ram",
    age:27,
    gender:"female"
}

console.log(student.name);
const{name} = student               //object destructring
console.log(name);
const{gender,age} = student               //object destructring multiple properties at once
console.log(gender,age);
