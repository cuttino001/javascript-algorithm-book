// 二叉树的实现
function TreeNode(val){
  this.val = val;
  this.left = this.right = null;
}
// 先序遍历
// 中序遍历
// 后序遍历
// 层次遍历

// 递归遍历（先、中、后序遍历）
// 迭代遍历（层次遍历）

const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right:{
    val:"C",
    right: {
      val:"F"
    }
  }
}

// 递归式 根结点 -> 左子树 -> 右子树
// 递归边界

// 先序遍历
// function preorder(root){
//   // 递归边界，root 为空
//   if(!root) return;
//   // 输出当前遍历的结点值
//   console.log('当前遍历的结点值是：', root.val)  
//   preorder(root.left);
//   preorder(root.right);
// }
// preorder(root)

// 中序遍历
// function inorder(root) {
//   if(!root) {
//     return;
//   }
//   inorder(root.left);
//   // 输出当前遍历的结点值
//   console.log('当前遍历的结点值是：', root.val)  
//   inorder(root.right);
// }
// inorder(root);

// 后续遍历
function backorder(root){
  if(!root){
    return;
  }
  backorder(root.left);
  backorder(root.right);
  console.log('当前遍历的结点值是：', root.val)  
}
backorder(root);