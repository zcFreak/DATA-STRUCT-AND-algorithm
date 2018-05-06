function BinarySearchTree() {

    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;

    this.insert = function(key) {
        var newNode = new Node(key);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    }

    var insertNode = function(node, newNode) {
        if (newNode.key < node.key) {
           if (node.left === null) {
               node.left = newNode;
           } else {
               insertNode(node.left, newNode);
           } 
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    }

    //中序遍历
    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback);
    }

    //callback是组成函数内容
    var inOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    }

    //先序遍历
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    }

    var preOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    //后序遍历
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    }

    var postOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    //寻找最小键的方法
    this.min = function() {
        return minNode(root);
    }

    var minNode = function(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }

            return node.key;
        }
        
        return null;
    }

    //寻找最大键的方法
    this.max = function() {
        return maxNode(root);
    }

    var maxNode = function(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }

            return node.key;
        }

        return null;
    }

    //搜索一个特定的值
    this.search = function(key) {
        return searchNode(root, key);
    }

    var searchNode = function(node, key) {
        if (node === null) {
            return false;
        }
        if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    }

    //移除一个节点
    var removeNode = function(node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            //第一种情况   一个叶节点
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            //一个只有一个子节点的节点
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            //一个有两个子节点的节点
            var aux = MinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);

            return node;
            
        }
    }
}