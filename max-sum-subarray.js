/*
--- Maximum Sum Subarray of Size K ---
Given an array of positive numbers and a postive number 'k', find the maximum sum of any contiguous subarray of size 'k'.

-- Example 1 -- 
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

-- Example 2 -- 
Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

1) Constraints
  - if k is bigger than array length
  - compare max sum
  - keep track of index where window starts
  - keep track of index where window ends
  - keep track of running sum
2) Approach
  - for/in loop to iterate through array
    -- iterator is the right side of the window
    -- add each element in the array (accumulate window sum)
    -- Conditional:
        --- IF the window's end has grown to the size of the desired window
          ---- compare running sum with max sum, reassign max sum to the larger sum
          ---- move window over, increment window start by 1
          ---- subtract index we moved from to update current running sum
3) Return
  - max sum
*/

const maxSubArr = function (k, array) {
  let maxSum = 0;
  let runningSum = 0;
  let start = 0;

  for (let end = 0; end < array.length; end++) {
    runningSum += array[end];
    if (end - start + 1 >= k) {
      maxSum = Math.max(maxSum, runningSum);
      start++;
      runningSum -= array[start - 1];
    }
  }
  return maxSum;
};

const sub = [2, 3, 4, 1, 5];
const k = 2;
console.log(maxSubArr(k, sub));
