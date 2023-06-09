/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return target;
      } else if (sum < target) {
        res.push(sum);
        left++;
      } else {
        res.push(sum);
        right--;
      }
    }
  }
  let closestSum = res[0];
  for (let i = 1; i < res.length; i++) {
    if (Math.abs(target - res[i]) < Math.abs(target - closestSum)) {
      closestSum = res[i];
    }
  }
  return closestSum;
};
