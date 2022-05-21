// 深度优先搜索的核心思想，是试图穷举所有的完整路径。
// 深度优先的本质是栈结构，也就是说递归的本质就是栈
// 深度优先搜索的过程可以转化为一系列的入栈、出栈操作
// 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
  // 递归边界，root 为空
  if (!root) {
    return;
  }

  // 输出当前遍历的结点值
  console.log("当前遍历的结点值是：", root.val);
  // 递归遍历左子树
  preorder(root.left);
  // 递归遍历右子树
  preorder(root.right);
}
// 广度优先搜索每次以“广度”为第一要务、雨露均沾，一层一层地扫描
// 广度优先常会借助一个队列实现，不断push()和shift(),
function BFS(root) {
  const queue = []; // 初始化队列queue
  // 根结点首先入队
  queue.push(root);
  // 队列不为空，说明没有遍历完全
  while (queue.length) {
    const top = queue[0]; // 取出队头元素
    // 访问 top
    console.log(top.val);
    // 如果左子树存在，左子树入队
    if (top.left) {
      queue.push(top.left);
    }
    // 如果右子树存在，右子树入队
    if (top.right) {
      queue.push(top.right);
    }
    queue.shift(); // 访问完毕，队头元素出队
  }
}
