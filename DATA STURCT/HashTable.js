function HashTable() {
    var table = [];

    var loseloseHashCode = function(key) {
        var hash = 0;
        for (var i = 0; i < key.length; ++i) {
            hash += key.charCodeAt(i);
        }

        return hash % 37;
    }

    this.put = function(key, value) {
        var position = loseloseHashCode(key);

        table[position] = value;
    }

    this.get = function(key) {
        return table[loseloseHashCode[key]];
    }

    this.remove = function(key) {
        table[loseloseHashCode[key]] = undefined;
    }

    //better loseloseHashtable;
    var djb2HashCode = function(key) {
        var hash = 5381;
        for (var i = 0; i < key.length; ++i) {
            hash = hash * 33 + key.charCodeAt(i);
        }

        return hash % 1013;
    }
}