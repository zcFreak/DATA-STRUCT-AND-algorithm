//冒泡排序
this.bubbleSort = function() {
    var length = array.length;
    for (var i = 0; i < length; ++i) {
        for (var j = 0; j < length - 1; ++j) {
            if (array[j] > array[j+1]) {
                swap(j, j + 1);
            }
        }
    }
}
var swap = function(index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

//选择排序
this.selectionSort = function() {
    var length = array.length, indexMin;

    for (var i = 0; i < length - 1; ++i) {
        indexMin = i;
        
        for (var j = i; j < length; ++j) {
            if (array[indexMin] > array[i]) {
                indexMin = j;
            }
        }

        if (i !== indexMin) {
            swap(i, indexMin);
        }
    }
}

//插入排序
this.insertSort = function() {
    var length = array.length, j, temp;

    for (var i = 0; i < length; ++i) {
        j = i;
        temp = array();

        while (j > 0 && array[j-1] > temp) {
            array[j] = array[j-1];
            j--;
        }
        array[j] = temp;
    }
}

//归并排序
this.mergeSort = function(array) {
    array = mergeSortRec(array);
}

var mergeSortRec = function(array) {
    var length = array.length;

    if (length === 1) {
        return array;
    }

    var mid = Math.floor(length / 2);

    left = array.slice(0, mid);
    right = array.slice(mid, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
}

var merge = function(left, right) {
    var result = [], il = 0, ir = 0; 

    while(il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    while (il < left.length) {
        result.push(left[il++]);
    }

    while (ir < right.length) {
        result.push(right[ir++]);
    }

    return result;
}

var test = array(3, 5, 9, 2, 4, 6);

alert(this.mergeSort(test));