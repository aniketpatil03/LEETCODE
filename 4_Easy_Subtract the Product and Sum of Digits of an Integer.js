// 1281. Subtract the Product and Sum of Digits of an Integer
// Easy
// 2.1K
// 215
// Companies
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 

// Constraints:

// 1 <= n <= 10^5
// --------------------------My Solution------
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    // Retriving for provided Number
    // Converted it to String and add it arr by split method
    let stringValue = String(n)
    let arr = stringValue.split("");

    // addition of digits
    let sum = 0;
    function addition (item) {
        //To prevent type Coercion for +
        item = Number(item);

        sum += item
    }
    arr.forEach(addition);

    // multiply of digits
    let product = 1;
    function multiplication (item) {
        product *= item
    }
    arr.forEach(multiplication);

    // Diffrence btween Product & summation
    return product - sum;
    
};
