/*
  1. Two Sum (whose intger sums up to target)
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

// ---- My solution -- 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //iterate over loop to find the sum
    for (let i = 0; i < nums.length; i++) {
        // Double loop cauz we compare each value with every other value and so on.
        // As we will compare present element and next ie i & i+1 
        for ( let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];  // if this is true it breaks of loop
                break;
            }
        }
    }
    
};
