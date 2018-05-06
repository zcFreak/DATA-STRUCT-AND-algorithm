this.quickSort = function(array) {
    quick(array, 0, array.length - 1);
}

var quick = function(array, left, right) {
    var index;

    if (array.length > 1) {
        index = partition(array, left, right);

        if (left <index - 1) {
            quick(array, left, index - 1);
        }

        if (index < right) {
            quick(array, index, right);
        }
    }
}

var partition = function(array, left, right) {                // 3 5 1 6 4 7 2;       6
    var pivot = array(Math.floor(right + left) / 2);           // 3 5 1 2 4 7 6
    i = left;
    j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }

        while (array[j] > pivot) {
            j--;
        }

        if (i <=j) {
            swapQUickSort(array, i, j);
            i++;
            j--;
        }
    }

    return i;
}

var swapQuickSort = function(array, index1, index2) {
    var aux = array[index];
    array[index1] = array[index2];
    array[index2] = aux;
}

//动态规划
//  Dynamic ProGramming, DP   一种将复杂问题分解成更小的子问题来解决的优化技术
function MinCoinChange(coins) {
    var coins = coins;
    var cache = {};

    this.makeChange = function(amount) {
        var me = this;
        if (!amount) {
            return [];
        }

        if (cache[amount]) {
            return cache[amount];
        }

        var min = [], newMin, newAmount;
        for (var i = 0; i < coins.length; ++i) {
            var coin = coins[i];
            newAmount = amount - coin;

            if (newAmount >= 0) {
                newMin = me.makeChange(newAmount);
            }
            if (newAmount >= 0 && newMin.length < min.length - 1 || !min.length && newMin.length || !newAmount) {
                min = [coin].concat(newMin);
                console.log('new Min '+ min + 'for ' + amount);
            } 
        }

        return (cache[amount] = min);
    }
}

//贪心算法
function MinCoinChange(coins) {
    var coins = coins;

    this.makeChange = function(amount) {
        var change = [], total = 0;
        
        for (var i = coins.length; i >= 0; i--) {
            var coin = coins[i];

            while (total + coin <= amount) {
                change.push(coin);
                total += coin;
            }
        }
    }
}