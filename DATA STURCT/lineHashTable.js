function lineHashTable() {
    var loseloseHashTable = function(key) {
        var hash = 0;

        for (var i = 0; i < key.length; ++i) {
            hash += key.charCodeAti();
        }

        return hash;
    }

    this.put = function(key, value) {
        var position = loseloseHashTable(key);

        if (table[position] == undefined) {
            table[position] = new ValuePair(key, value);
        } else {
            var index = ++position;
            while (table[index] !== undefined) {
                index++;
            }

            table[index] = new ValuePair(key, value);
        }
    }

    this.get = function(key) {
        var position = loseloseHashTable(key);

        if (table[position] != undefined) {
            if (table[position].key == key) {
                return table[position].value;
            } else {
                var index = ++position;
                while(table[index] === undefined || table[index].key !== key) {
                    ++index;
                } 

                if (table[index].key === key) {
                    return table[index].value;
                }
            }
        }

        return false;
    }
}