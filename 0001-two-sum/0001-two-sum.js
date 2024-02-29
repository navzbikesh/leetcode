/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const storage={};
    for(let i=0;i<nums.length;i++)
    {
    const currentValue = nums[i];
    const neededValue = target - currentValue;
    const index2 = storage[neededValue];
        if(index2 != null)
        {
            return [index2, i];
        }
        else
        {
            storage[currentValue] = i;
        }
    }
   
};