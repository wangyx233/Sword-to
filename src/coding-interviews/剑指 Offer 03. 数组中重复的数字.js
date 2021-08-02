/**
 * @param {number[]} nums
 * @return {number}
 */
// 借助map，时间O(n)，空间O(n)，注意map的return是elem,foreach的return并不会停止循环，需要用for
var findRepeatNumber = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    if (map[elem]) {
      return elem;
    } else {
      map[elem] = true;
    }
  }
};

// 不借助额外的空间，原地比较，时间复杂度O(n)，空间O(1)
var findRepeatNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let elem = nums[i];
    if (elem === i) {
      continue;
    }
    if (elem === nums[elem]) {
      return elem;
    }
    let temp = nums[elem];
    nums[elem] = elem;
    elem = temp;
    i--;
  }
};
