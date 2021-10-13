/*
 * @Since: 2021-10-13 11:06:11
 * @LastAuthor: Yixuan
 * @LastTime: 2021-10-13 16:49:33
 */

/*
1. 日期格式化
dateFormat(new Date('2021-10-01'), 'yyyy-MM-dd') // 2021-10-01
dateFormat(new Date('2021-10-01'), 'yyyy年MM月dd日') // 2021年10月01日
*/

const dateFormat = (date, format) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return format.replace('yyyy', year).replace('MM', month).replace('dd', day)
}
dateFormat(new Date('2021-10-01'), 'yyyy-MM-dd')
dateFormat(new Date('2021-10-01'), 'yyyy年MM月dd日') // 2021年10月01日

/*
new Date()
getDate() // 每个的第几日
getMonth() // 月份，从 0 开始
getFullYear() // 年
getDay() // 周几，周日 ： 0
getHours() // 小时
getMinutes() // 分钟
getSeconds() // 秒
getTime() // 时间戳 1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数。
*/

/*
2. 交换a,b的值，不能用临时变量
a = 1
b = 2
*/

const swap1 = (a, b) => {
  [a, b] = [b, a] // 解构
}
const swap2 = (a, b) => {
  a = a + b
  b = a - b
  a = a - b
}
swap1(1, 2)
swap2(1, 2)

/*
3. 数组的乱序输出
var arr = [1,2,3,4,5,6,7,8,9,10];
Math.round() 四舍五入，最大是剩余的数量
*/

const outOrder = arr => {
  for (let i = 0; i < arr.length; i++) {
    const nextIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
    [arr[i], arr[nextIndex]] = [arr[nextIndex], arr[i]]
  }
  return arr
}
outOrder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*
4. 数组求和
*/

(function () {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum = arr.reduce((sum, i) => sum += i, 0)

  arr = [1, 2, 3, [
    [4, 5], 6
  ], 7, 8, 9]
  sum = arr.toString().split(',').reduce((sum, i) => sum += +i, 0)

  let add = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i]
      sum += Array.isArray(elem) ? add(elem) : elem
    }
    return sum
  }
})();

/*
5. 数组扁平化
*/

(function () {
  let arr = [1, [2, [3, 4, 5]]]
  // let flatArr = arr.flat(Infinity)
  // arr.toString().split(',')
  // 解构循环，有数组就循环呀
  function flatten(arr, depth) {
    while (arr.some(elem => Array.isArray(elem)) && depth > 0) {
      arr = [].concat(...arr)
      depth--
    }
    return arr
  }
  // 递归
  function flatten(arr, depth) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i]
      if (Array.isArray(elem) && depth > 0) {
        res = res.concat(flatten(elem, depth - 1))
      } else {
        res.push(elem)
      }
    }
    return res
  }

  function flatten(arr, depth) {
    if (!Array.isArray(arr) || depth <= 0) return arr
    return arr.reduce((flatArr, elem) => flatArr.concat(Array.isArray(elem) ? flatten(elem, depth - 1) : elem), [])
  }
  // console.log(flatten(arr, 1))
})();

/*
6. 数组去重
*/
(function () {
  const arr = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
  // console.log([...new Set(arr)])

  function uniq(arr) {
    return arr.filter((elem, index) => arr.indexOf(elem) === index)
  }

  // 借助map
  function uniq(arr) {
    let obj = {},
      res = []
    arr.forEach(elem => {
      if (!obj[elem]) {
        obj[elem] = 1
        res.push(elem)
      }
    })
    return res
  }
  // console.log(uniq(arr))
})();