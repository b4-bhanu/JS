let score  = 44

console.log(typeof score)
score = "44"
console.log(typeof score)

let val = Number(score)
console.log(typeof val);

score = "44abc"
val = Number(score)
console.log(typeof val);
/*here  the output for data type of val is still going to be a number , which is not  true,
it is actually NaN(not a number)
*/
score = "abc44"
val = Number(score)
console.log( val);

//the ouput for the following is zero, which is cause error in temperature like measures
score = null
val = Number(score)
console.log( val);

//the output for the following is again NaN
score = undefined
val = Number(score)
console.log( val);

score = true
val = Number(score)
console.log(val)
// "33" => 33
//"33abc" => NaN, but the type of NaN is still a number
// true=>1, false =>0
//"" empty string => false 
//"bhanu" => true

let num = undefined
let str = String(num)
console.log(str)

