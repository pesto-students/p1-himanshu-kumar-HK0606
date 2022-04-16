
var name="hk";
console.log(name);


const name1="honey";
console.log(name1);

var channel;
console.log(name1,channel); 
    
// let is used for block level scope.

//Data Types

// Primitive Datatype ------

//String
let name = "honey";
console.log('my name is ' + name);
console.log( typeof name); 

//Numbers
let marks = 58;
console.log(marks);
console.log ( typeof marks); //Data type number

//Boolean

let isDriver = true;
console.log(typeof isDriver); //Datatype 

//Null
let nullVar = null;
console.log( typeof nullVar); //Datatype --object  

//Undefined
let undef = undefined;
console.log(typeof undef); //Type --undefined

// # Reference Datatype

//Arrays 

let myarr = [1,2,3,4,5];
console.log(typeof myarr); //Datatype--Object

//Function 

function findname(){
}
console.log( typeof findname); 

//# Type Conversion  Tut (5)

let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

let Booleanvar;
Booleanvar = Number(58);
console.log(Booleanvar, (typeof Booleanvar)); 

let arr = [2,5,7,9];
console.log(arr.length, (typeof arr));

let i = 8;
console.log(i.toString()); 

let number = parseFloat(34.89);
console.log(number, (typeof number));

//## Corecion

let mystr = '698';
let mynum = 34;
console.log(mystr + mynum); 