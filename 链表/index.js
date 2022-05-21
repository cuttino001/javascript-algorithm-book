// 链表的实现
function ListNode(val){
  this.val = val;
  this.next = null;
}

const node = new ListNode(1);
node.next = new ListNode(2);

console.log(node.next.val);


/**
 * 常见题型
 * 链表的处理：合并、删除等（删除操作画个记号，重点中的重点！）
   链表的反转及其衍生题目
   链表成环问题及其衍生题目
 */

// 题目1 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4
// 定一个空的 node，并将cur指针☞head
// l1.val < l2.val  那么 cur.next = l1;l1 = l1.next; 否则cur.next = l2; l2 = l2.next
// cur 向后走一步继续 cur = cur.next; 这个指针就不断的穿梭在L1和L2中间
// 一旦一个链表到达最后了，则将cur的next指向另外一个链表
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 const mergeTwoLists = function(l1, l2) {
  // 定义头结点，确保链表可以被访问到
  let head = new ListNode()
  // cur 这里就是咱们那根“针”
  let cur = head
  // “针”开始在 l1 和 l2 间穿梭了
  while(l1 && l2) {
      // 如果 l1 的结点值较小
      if(l1.val<=l2.val) {
          // 先串起 l1 的结点
          cur.next = l1
          // l1 指针向前一步
          l1 = l1.next
      } else {
          // l2 较小时，串起 l2 结点
          cur.next = l2
          // l2 向前一步
          l2 = l2.next
      }
      
      // “针”在串起一个结点后，也会往前一步
      cur = cur.next 

  }
  
  // 处理链表不等长的情况
  cur.next = l1!==null?l1:l2
  // 返回起始结点
  return head.next
};


// 题目2 删除重复的
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const deleteDuplicates = function(head) {
  // 设定 cur 指针，初始位置为链表第一个结点
  let cur = head;
  // 遍历链表
  while(cur != null && cur.next != null) {
      // 若当前结点和它后面一个结点值相等（重复）
      if(cur.val === cur.next.val) {
          // 删除靠后的那个结点（去重）
          cur.next = cur.next.next;
      } else {
          // 若不重复，继续遍历
          cur = cur.next;
      }
  }
  return head;
};


// 快慢指针与多指针
// 快慢指针——删除链表的倒数第 N 个结点
// dummy 结点的使用。
// 链表删除问题中，若走两次遍历，我们做了两件事：
// 1.求长度
// 2.做减法，找定位。
// 若用快慢指针，我们其实是把做减法和找定位这个过程给融合了。通过快指针先行一步、接着快慢指针一起前进这个操作，巧妙地把两个指针之间的差值保持在了“n”上（用空间换时间，本质上其实就是对关键信息进行提前记忆，这里咱们相当于用两个指针对差值实现了记忆），这样当快指针走到链表末尾（第 len 个）时，慢指针刚好就在 len - n 这个地方稳稳落地。



// 环形链表判断
// 立一个flag