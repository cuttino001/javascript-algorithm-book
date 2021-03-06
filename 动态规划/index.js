// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
/**
 * @param {number} n
 * @return {number}
 * 记忆化搜索和动态规划差不多，都能以不错的效率达到目的
 * 我们基于树形思维模型来解题时，实际上是站在了一个比较大的未知数量级（也就是最终的那个n），来不断进行拆分，最终拆回较小的已知数量级（f(1)、f(2)）。这个过程是一个明显的自顶向下的过程。
 */
// 定义记忆数组 f
const f = [];
const climbStairs = function (n) {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  // 若f[n]不存在，则进行计算
  if (f[n] === undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2);
  // 若f[n]已经求解过，直接返回
  return f[n];
};

console.log(climbStairs(99));

/**
 * 动态规划解法
 * @param {number} n
 * @return {number}
 */
const climbStairs1 = function (n) {
  // 初始化状态数组
  const f = [];
  // 初始化已知值
  f[1] = 1;
  f[2] = 2;
  // 动态更新每一层楼梯对应的结果
  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 2] + f[i - 1];
  }
  // 返回目标值
  return f[n];
};
console.log(climbStairs1(99));

// 什么样的题应该用动态规划来做？我们要抓以下两个关键特征：
// 最优子结构
// 重叠子问题

// 分析路径
// 1. 递归思想明确树形思维模型：找到问题终点，思考倒退的姿势，往往可以帮助你更快速地明确状态间的关系
// 2. 结合记忆化搜索，明确状态转移方程
// 3. 递归代码转化为迭代表达（这一步不一定是必要的，1、2本身为思维路径，而并非代码实现。若你成长为熟手，2中分析出来的状态转移方程可以直接往循环里塞，根本不需要转换）。

// 如何优雅地找硬币
// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
// 最值问题是动态规划的常见对口题型，见到最值问题，应该想到动态规划
