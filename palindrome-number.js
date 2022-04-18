/**
 * 9. Palindrome Number
Easy

5608

2095

Add to List

Share
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
 */

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x) {
      const arr = x.toString().split("");
      let start = 0;
      let end = x.toString().length - 1;
      console.log(typeof arr[end]);

      while (start !== end && start < end) {
        if (Number(arr[start]) !== Number(arr[end])) {
          return false;
        }
        start++;
        end--;
      } 
      return x + " is a palindrome";
    }
    return null;
};

/*
 Success
 Details 
 Runtime: 284 ms, faster than 32.91% of JavaScript online submissions for Palindrome Number.
 Memory Usage: 56.5 MB, less than 7.58% of JavaScript online submissions for Palindrome Number.
 */