
// path sum into the tree   
// find the target sum  in tree if at the leaf node it finds then return true

class TreeNode{
    constructor(data) {
        this.data = data
        this.left = null;
        this.right = null;

    }
}

function Pathsum(root, targetvalue) {

    function findpathsum(node, current){
        if (!node) {
            return false
        }

        current += node.data;

        if (node.left === null && node.right === null) {
            return current === targetvalue
        }

        return findpathsum(node.left,current) || findpathsum(node.right,current)

    }
    return findpathsum(root, 0);
}


const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.right.right.right = new TreeNode(1);

const targetSum =30;
const result = Pathsum(root, targetSum);

console.log(result); 
