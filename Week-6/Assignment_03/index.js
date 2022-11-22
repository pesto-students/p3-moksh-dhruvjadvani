/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0;
    let j = 0;
    let k = nums.length - 1;



    while (i <= k) {
        if (nums[i] == 0) {
            swap(nums, i, j);
            i++;
            j++;
        } else if (nums[i] == 1) {
            i++;
        } else {
            swap(nums, i, k);
            k--;
        }
    }
};


function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
