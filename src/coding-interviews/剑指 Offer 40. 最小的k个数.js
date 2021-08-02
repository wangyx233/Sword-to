/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 明确最小的数个数包不包括重复的，js的api，借助sort，然后slice
var getLeastNumbers = function (arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k);
};

// 计数排序，对要排序的数列遍历，找到最大最小值，然后建一个最大最小值范围的桶，再遍历一遍要排序的数列填充桶，然后操作桶得到排序后的数列。对桶内数列按序累加，然后确定排序数据所在位置
// 时间空间复杂度O(n+k)，求和和倒序为了保持排序的稳定性
var getLeastNumbers = function (arr, k) {
  const max = arr.reduce((max, elem) => max = Math.max(max, elem), 0) + 1;
  const bucket = new Array(max).fill(0);
  const res = [];
  arr.forEach(elem => {
    bucket[elem] = ++bucket[elem];
  })
  // 找到前k个最小值
  let index = 0;
  for (let i = 0; i < bucket.length; i++) {
    while (bucket[i] && index < k) {
      res[index] = i;
      index++;
      bucket[i]--;
    }
    if (index === k) {
      break;
    }
  }
  return res;
};

// 如果是第k个最小的值，则可以用堆排序，建堆，更新堆。时间复杂度O(nlogn)，空间O(n)
// 大顶堆，堆里为前K个元素
var getLeastNumbers = function (arr, k) {
  let heap = [];
  // 建堆
  const up = (low, high) => {
    let i = high;
    let j = Math.floor((i - 1) / 2);
    while (j >= low) {
      if (heap[j] < heap[i]) {
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
        i = j;
        j = Math.floor((i - 1) / 2);
      } else {
        break;
      }
    }
  }
  const create = () => {
    for (let i = 0; i < k; i++) {
      heap[i] = arr[i];
      up(0, i);
    }
  }
  create();
  // 更新堆
  const down = (low, high) => {
    let i = low;
    let j = 2 * i + 1;
    while (j <= high) {
      if (heap[j + 1] > heap[j]) {
        j = j + 1;
      }
      if (heap[i] < heap[j]) {
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
        i = j;
        j = 2 * i + 1;
      } else {
        break;
      }
    }
  }
  const update = () => {
    for (let i = k; i < arr.length; i++) {
      if (arr[i] < heap[0]) {
        heap[0] = arr[i];
        down(0, k);
      }
    }
  }
  update();
  return heap;
};

// TopK的问题，用变形快排，时间复杂度O(n)
// 普通的快排
var getLeastNumbers = function (arr, k) {
  const quick = arr => {
    if (arr.length <= 1) {
      return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quick(left).concat(pivot, quick(right));
  }
  const res = quick(arr);
  return res.slice(0, k)
};


console.log(getLeastNumbers([0, 0, 1, 2, 4, 2, 2, 3, 1, 4], 8))