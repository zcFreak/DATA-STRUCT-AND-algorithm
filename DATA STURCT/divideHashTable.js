function DivHashTable(){
    var table = [];

    var ValuePair = function(key, value) {
        this.key = key;
        this.value = value;

        this.toString = function() {
            return '[' + this.key + '-' + this.value + ']';
        }
    }

    var loseloseHashTable = function(key) {
        var hash = 0;

        for (var i = 0; i < key.length; ++i) {
            hash += key.charCodeAt(i);
        }

        return hash % 37;
    }

    this.put = function(key, value) {
        var position = loseloseHashTable(key);

        if (table[position] !== undefined) {
            table[position] = new LinkedList();
        }

        table[position].append(new ValuePair(key, value));
    }

    this.get = function(key) {
        var position = loseloseHashTable(key);

        if (table[position] !== undefined) {
            var current = table[position].getHead();
        }

        while (current) {
            if (current.element.key === key) {
                return current.element.value;
            }

            current = current.next;
        }

        if (current.element.key === key) {
            return current.element.value;s
        }

        return undefined;
    }

    this.remove = function(key) {
        var position = loseloseHashTable(key);

        if (table[position] !== undefined) {
            while(current.next) {
                 if (current.element.key === key) {
                     table[position].remove(current.element);
                     if (table[position].isEmpty) {
                         table[position] = undefined;
                     }
                     return true;
                 }
                 current = current.next;
            }

            if (current.element.key === key) {
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }

        return false;
    }

}