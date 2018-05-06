function Set() {
    var items = {};

    this.has = function(value) {
        return items.hasOwnProperty(value);
    }

    this.add = function(value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
    }

    this.remove = function(value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        } else {
            return false;
        }
    }

    this.clear = function() {
        items = {};
    }

    this.size = function() {
        return Object.keys(items).length;
    }

    this.values = function() {
        return Object.keys(items);
    }

    //并集
    this.union = function(otherSet) {
        var unionSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; ++i) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for (var i = 0; i < values.length; ++i) {
            unionSet.add(values[i]);
        }

        return unionSet;
    }

    //交集
    this.intersection = function(otherSet) {
        var intersection = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; ++i) {
            if (otherSet.has(values[i])) {
                intersection.add(values[i]);
            }
        }

        return intersection;
    }

    //差集 表示x元素存在A中，且不存在B中
    this.difference = function(otherSet) {
        var difference = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; ++i) {
            if (!otherSet.has(values[i])) {
                difference.add(values[i]);
            }
        }
    }

    //子集 集合A中每个元素，也需要存在于B中
    this.subset = function(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; ++i) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }

            return true;
        }
    }
}