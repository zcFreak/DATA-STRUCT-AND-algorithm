function Directionary() {
    var items = {};

    this.has = function(key) {
        return key in items;
    }

    this.set = function(key, value) {
        items[key] = value;
    }

    this.remove = function(key) {
        if (this.has(key)) {
            delete items[key];

            return true;
        }
        
        return false;
    }

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    }

    this.values = function(key) {
        return object.key(items);
    }

    
}