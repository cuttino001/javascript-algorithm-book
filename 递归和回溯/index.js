// 全排列
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 入参是一个数组
const permute = function (nums) {
  // 缓存数组的长度
  const len = nums.length;
  // curr 变量用来记录当前的排列内容
  const curr = [];
  // res 用来记录所有的排列顺序
  const res = [];
  // visited 用来避免重复使用同一个数字
  const visited = {};
  // 定义 dfs 函数，入参是坑位的索引（从 0 计数）
  function dfs(nth) {
    // 若遍历到了不存在的坑位（第 len+1 个），则触碰递归边界返回
    if (nth === len) {
      // 此时前 len 个坑位已经填满，将对应的排列记录下来
      res.push(curr.slice());
      return;
    }
    // 检查手里剩下的数字有哪些
    for (let i = 0; i < len; i++) {
      // 若 nums[i] 之前没被其它坑位用过，则可以理解为“这个数字剩下了”
      if (!visited[nums[i]]) {
        // 给 nums[i] 打个“已用过”的标
        visited[nums[i]] = 1;
        // 将nums[i]推入当前排列
        curr.push(nums[i]);
        // 基于这个排列继续往下一个坑走去
        dfs(nth + 1);
        // nums[i]让出当前坑位
        curr.pop();
        // 下掉“已用过”标识
        visited[nums[i]] = 0;
      }
    }
  }
  // 从索引为 0 的坑位（也就是第一个坑位）开始 dfs
  dfs(0);
  return res;
};

// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 入参是一个数组
const subsets = function (nums) {
  // 初始化结果数组
  const res = [];
  // 缓存数组长度
  const len = nums.length;
  // 初始化组合数组
  const subset = [];
  // 进入 dfs
  dfs(0);

  // 定义 dfs 函数，入参是 nums 中的数字索引
  function dfs(index) {
    // 每次进入，都意味着组合内容更新了一次，故直接推入结果数组
    res.push(subset.slice());
    // 从当前数字的索引开始，遍历 nums
    for (let i = index; i < len; i++) {
      // 这是当前数字存在于组合中的情况
      subset.push(nums[i]);
      // 基于当前数字存在于组合中的情况，进一步 dfs
      dfs(i + 1);
      // 这是当前数字不存在与组合中的情况
      subset.pop();
    }
  }
  // 返回结果数组
  return res;
};

// 限定组合问题：及时回溯，即为“剪枝”
// 回溯算法实际上一个类似枚举的搜索尝试过程，主要是在搜索尝试过程中寻找问题的解，当发现已不满足求解条件时，就 “回溯” 返回，尝试别的路径。
// 许多复杂的，规模较大的问题都可以使用回溯法，有“通用解题方法”的美称。
// 回溯算法的基本思想是：从一条路往前走，能进则进，不能进则退回来，换一条路再试。 ——LeetCode

// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
// 递归式：普通组合问题，每到一个新的坑位处，我们都需要对组合结果数组进行更新；这道题中，当且仅当组合内数字个数为 k 个时，才会对组合结果数组进行更新。
// 递归边界：只要组合内数字个数达到了 k 个，就不再继续当前的路径往下遍历，而是直接返回。
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  // 初始化结果数组
  const res = [];
  // 初始化组合数组
  const subset = [];
  // 进入 dfs，起始数字是1
  dfs(1);

  // 定义 dfs 函数，入参是当前遍历到的数字
  function dfs(index) {
    if (subset.length === k) {
      res.push(subset.slice());
      return;
    }
    // 从当前数字的值开始，遍历 index-n 之间的所有数字
    for (let i = index; i <= n; i++) {
      // 这是当前数字存在于组合中的情况
      subset.push(i);
      // 基于当前数字存在于组合中的情况，进一步 dfs
      dfs(i + 1);
      // 这是当前数字不存在与组合中的情况
      subset.pop();
    }
  }
  // 返回结果数组
  return res;
};

console.log(JSON.stringify(combine(3, 2)));
