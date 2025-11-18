// console.log(2 > 1)
// console.log(2 == 1)
// console.log(2 != 1)
// console.log(2 <= 1)

// console.log("2" > 1)

// console.log(null > 0);
// console.log(null == 0);
// console.log(null <= 0);
// console.log(null >= 0);
/*
the output is unpredictable because an equality check == works differently than comparisons
Comparisons convert null to a number , treating it as 0 
that's why null >= 0 is true and null > 0 is false , because null is converted to zero with comparator 
so null is not greater than zero(null>0 or null < 0 are both false)
*/

// console.log(undefined > 0)
// console.log(undefined == 0)
// console.log(undefined < 0)

// there is no conversion of undefined here, so it is false in any case


/* STRICT CHECK */
//also compares data type

console.log("1" ==1 )
console.log("2" === 2 ) 

console.log(false != 0)
console.log(true != 1)

