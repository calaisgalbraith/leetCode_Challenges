/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return nums.concat(nums)
};

// Initial Solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var getConcatenation = function(nums) {
//     const arrayToReturn = nums
//     for (const num in nums) {
//         arrayToReturn.push(nums[num])
//     }
//     return arrayToReturn
// };
