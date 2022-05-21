// 几乎所有的求和问题，都可以转化为求差问题

// 两数求和问题
// function twoSum(nums, target) {
//   var d = {};
//   for(var i = 0, ilen = nums.length; i < ilen; i++) {
//     if(d[target - nums[i]] !== undefined){
//       return [d[target - nums[i]], i]
//     }else{
//       d[nums[i]] = i
//     }
//   }
// }
// console.log(twoSum([4, 3, 7, 2, 4], 9))

// 合并两个有序数组
/**
 * 双指针法
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//  const merge = function(nums1, m, nums2, n) {
//   // 初始化两个指针的指向，初始化 nums1 尾部索引k
//   let i = m - 1, j = n - 1, k = m + n - 1
//   // 当两个数组都没遍历完时，指针同步移动
//   while(i >= 0 && j >= 0) {
//       // 取较大的值，从末尾往前填补
//       if(nums1[i] >= nums2[j]) {
//           nums1[k] = nums1[i] 
//           i-- 
//           k--
//       } else {
//           nums1[k] = nums2[j] 
//           j-- 
//           k--
//       }
//   }
  
//   // nums2 留下的情况，特殊处理一下 
//   while(j>=0) {
//       nums1[k] = nums2[j]  
//       k-- 
//       j--
//   }
//   console.log(nums1)
// };

// merge([1,2,3,0,0,0],3,[1,5],2)


/**
 * 数组中查找三个数相加等于0的所有组合
 * 对撞指针法
 * @param {number[]} nums
 * @return {number[][]}
 */
 const threeSum = function(nums) {
  // 用于存放结果数组
  let res = [] 
  // 给 nums 排序
  nums = nums.sort((a,b)=>{
      return a-b
  })
  // 缓存数组长度
  const len = nums.length
  // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
  for(let i=0;i<len-2;i++) {
      // 左指针 j
      let j=i+1 
      // 右指针k
      let k=len-1   
      // 如果遇到重复的数字，则跳过
      if(i>0&&nums[i]===nums[i-1]) {
          continue
      }
      while(j<k) {
          // 三数之和小于0，左指针前进
          if(nums[i]+nums[j]+nums[k]<0){
              j++
             // 处理左指针元素重复的情况
             while(j<k&&nums[j]===nums[j-1]) {
                  j++
              }
          } else if(nums[i]+nums[j]+nums[k]>0){
              // 三数之和大于0，右指针后退
              k--
             
             // 处理右指针元素重复的情况
             while(j<k&&nums[k]===nums[k+1]) {
                  k--
              }
          } else {
              // 得到目标数字组合，推入结果数组
              res.push([nums[i],nums[j],nums[k]])
              
              // 左右指针一起前进
              j++  
              k--
             
              // 若左指针元素重复，跳过
              while(j<k&&nums[j]===nums[j-1]) {
                  j++
              }  
             
             // 若右指针元素重复，跳过
             while(j<k&&nums[k]===nums[k+1]) {
                  k--
              }
          }
      }
  }
  
  // 返回结果数组
  return res
};


// tip
// 什么时候你需要联想到对撞指针？
// 这里我给大家两个关键字——“有序”和“数组”。
// 没错，见到这两个关键字，立刻把双指针法调度进你的大脑内存。普通双指针走不通，立刻想对撞指针！

// 1. 设定指针位置
// 2. 判断第一位和后两位相加的结果大于0或者小于0的情况，如果大于0了，说明最后一位大了，最后的指针往前移动，如果小于0了说明前一位小了，第一个指针往后移，一直到和为0
// 3. 边界条件