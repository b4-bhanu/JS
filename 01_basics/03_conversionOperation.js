let score  = 44

// console.log(typeof score)
score = "44"
// console.log(typeof score)

let val = Number(score)
// console.log(typeof val);

score = "44abc"
val = Number(score)
// console.log(typeof val);
/*here  the output for data type of val is still going to be a number , which is not  true,
it is actually NaN(not a number)
*/
score = "abc44"
val = Number(score)
// console.log( val);

//the ouput for the following is zero, which is cause error in temperature like measures
score = null
val = Number(score)
// console.log( val);

//the output for the following is again NaN
score = undefined
val = Number(score)
// console.log( val);

score = true
val = Number(score)
// console.log(val)
// "33" => 33
//"33abc" => NaN, but the type of NaN is still a number
// true=>1, false =>0
//"" empty string => false 
//"bhanu" => true

let num = undefined
let str = String(num)
// console.log(str)

// ********************Operations **************
let value = 3
let negValue = -value
// console.log(negValue);

/* 
bonus
function roundTo(n, decimals){
   const factor = 10 ** decimals;
   return Math.round(n*factor)/factor;
}
*/

// console.log(2+2);
// console.log(2**2);
// console.log(roundTo(3.145121,2));
// console.log(2%3);


let str1 = "harry"
let str2 =" sejal"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
// 
// console.log(true)
// console.log(+true) // the + sign causes a type conversion here from boolean to Number
let type = +true
// console.log(typeof type)

// prefix and postfix operator

let x = 3;
let y = x++;
console.log(x)
console.log(y);

let a = 3;
let b = ++a;
console.log(a)
console.log(b);


