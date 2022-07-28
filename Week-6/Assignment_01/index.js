/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) {
        return 0;
    }
        
    if(nums.length === 1) {
        return nums[0];
    }
    
    let maxSum = -Infinity;
    let curSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        curSum = curSum + nums[i];
        
        if (curSum > maxSum) {
            maxSum = curSum;
        }
        
        if(curSum < 0) {
            curSum = 0;
        }
    }
    
    return maxSum;
};
