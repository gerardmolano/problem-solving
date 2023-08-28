/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const comps = new Map();

    for (let i = 0; i < nums.length; i++) {
        
        let comp = target - nums[i];
        if (comps.has(comp)) {
            return [comps.get(comp), i];
        }

        comps.set(nums[i], i);
    }
};

