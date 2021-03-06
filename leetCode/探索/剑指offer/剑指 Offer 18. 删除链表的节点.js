/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if(!head){
        return head
    }
    let pre = head,cur = head.next
    if(pre.val === val){
        return cur
    }
    while(cur!=null){
        if(cur.val === val){
            pre.next = cur.next
            return head
        }
        pre = pre.next
        cur = cur.next
    }
};