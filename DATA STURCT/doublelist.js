function doubleList() {

    var Node = function(element) {

        this.element = element;
        this.next = null;
        this.prev = null;
    }

    var length = 0;
    var head = null;
    var tail = null;

    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
            var node = new Node(element),
            current = head,
            previous, index = 0;

            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    node.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                node.prev = current; 
                node.next = node;
                tail = node;
            } else {
                while (index++ < length) {
                    previous = current;
                    current = current.next;
                }

                node.prev = previous;
                node.next = current;

                previous.next = node;
                current.prev = node;
            }
            
            length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function(position) {
        if (position > -1 && position < length) {
            var current = head, previous, index = 0;

            if (position === 0) {
                head = current.next;

                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                previous = tail.prev;
                previous.next = null;
                tail = previous;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
                current.next.prev = previous;
            }
        }

        length--;
        return current.element;
    } else {
        return false;
    }
}