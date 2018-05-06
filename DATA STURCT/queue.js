function Queue()
{
    var items = [];

    this.enqueue = function(element) {
        items.push(element);
    }

    this.dequeue = function(element) {
        items.shift(element);
    }

    this.front = function(element) {
        return items[0];
    }

    this.isEmpty = function(element) {
        return items.length == 0;
    }

    this.clear = function(element) {
        items = [];
    }
    
    this.size = function(element) {
        return items.length;
    }

    this.print = function(element) {
        console.log(items.toString());
    }

    //优先队列
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority) {
        var queueElement = new QueueElement(element, priority);

        if (this.isEmpty()) {
            items.push(QueueElement);
        } else {
            var added = false;

            for (var i = 0; i < items.length; ++i) {
                if (QueueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            
            if (!added) {
                items.push(queueElement);
            }
        }

    }
}
