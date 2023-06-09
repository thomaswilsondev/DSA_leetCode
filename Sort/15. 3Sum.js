// Bước 1: Sắp xếp mảng nums theo thứ tự tăng dần (check)
// Bước 2: Duyệt qua từng phần tử trong mảng nums và chọn số đầu tiên của bộ ba số.
// Bước 3: Sử dụng hai con trỏ left và right để tìm hai số còn lại trong mảng mà tổng của chúng bằng đúng số đầu tiên đã chọn.
// Bước 4: Tiếp tục duyệt qua các phần tử còn lại trong mảng và lặp lại bước 3 để tìm các bộ ba số khác.
nums = [-1, 0, 1, 2, -1, -4];
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};
