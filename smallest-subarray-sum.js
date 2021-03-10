/*
--- Subarray Sum Equals K ---
Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

-- Example 1 -- 
Input: nums = [1,1,1], k = 2
Output: 2

-- Example 2 --
Input: nums = [1,2,3], k = 3
Output: 2

-- Example 3 --
Input: nums = [1,2,3], k = 6
output: 3

1) Constraints
 - if nums has less than two numbers in it
2) Approach
 - for/in loop to iterate through array
    -- keep track of window length
    -- keep track of window sum
3) Return


*/

const subarraySum = (nums, k) => {
  let windowSum = 0;
  let start = 0;
  let windowLength = Infinity

  for (let end = 0; end < nums.length; end++) {
    windowSum += nums[end];

    while (windowSum >= k) {
      windowLength = Math.min(windowLength, end - start + 1);
      windowSum -= nums[end];
      start++;
    }
  }
  if (windowLength === Infinity) {
    return 0
  }
  return windowLength
}

const nums = [1,2,3]
const k = 6
console.log(subarraySum(nums, k))
