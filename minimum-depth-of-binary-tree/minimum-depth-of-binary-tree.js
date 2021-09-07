/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
    let min = Infinity;
    
    function helper(root, level){
        if(root == null) return;
        
        if(!root.left && !root.right){ //leaf node check
            min = Math.min(min, level);
        }
        
        helper(root.left, level+1);
        helper(root.right, level+1);
    }
    helper(root, 1)
    return min;
};