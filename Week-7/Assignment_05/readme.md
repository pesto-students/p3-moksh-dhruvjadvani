Given an array arr{} of size N having distinct elements, the task is to find the nextgreater element for each element of the array in order of their appearance in the array.
Next greater element of an element in the array is the nearest element on the rightwhich is greater than the current element. 
If there does not exist next greater of currentelement, then next greater element for current element is -1. 
For example, next greaterof the last element is always -1.

Example 1:

Input:N = 4, arr[] = [1 3 2 4]

Output:3 4 4 -1

Explanation:In the array, the next larger element to 1 is 3 , 3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1.
