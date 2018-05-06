function Graph() {
    var vertices = [];  //用一个数组来储存所有顶点的名字
    var adjList = new Dicrionary();  //用字典来储存邻接表

    //添加顶点和添加顶点的边
    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v, []);
    }

    //添加邻接表
    this.addEdge = function(v, w) {
        adjList.get(v).push(W);
        adjList.get(w).push(v);
    }

    this.toString = function() {
        var s = '';
        for (var i = 0; i < vertices.length; ++i) {
            s += vertices[i] + '->';
            var neightbors = adjList.get(vertices[i]);

            for (var j = 0; j < neightbors.length; ++j) {
                s += neightbors[i] + ' ';
            }

            s += '/n';
        }

        return s; 
    }

    //广度优先搜索
    var initializeColor = function() {
        var color = [];
        for (var i = 0; i < vertices.length; ++i) {
            color[vertices[i]] = 'white';
        }

        return color;
    }

    this.bfs = function(v, callback) {
        var color = initializeColor(),
        queue = new queue();
        queue.enqueue(v);

        while (!queue.isEmpty) {
            var u = queue.dequeue;
            neightbors = adjList.get(u);
            color[u] = 'gray';

            for (var i = 0; i < neightbors.length; ++i) {
                var w = neightbors[i];

                if (color[w] === 'white') {
                    color[w] = 'gray';
                    queue.enqueue(w);
                }
            }

            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    }

    //改进版的BFS
    this.BFS = function(v, callback) {
        var color = initializeColor(),
        queue = new queue(),
        d = [], pred = [];
        queue.enqueue(v);

        for (var i = 0; i <vertices.length; ++i) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty) {
            var u = queue.dequeue;
            neightbors = adjList.get(u);
            color[u] = 'gray';

            for (var i = 0; i < neightbors.length; ++i) {
                var w = neightbors[i];

                if (color[w] === 'white') {
                    color[w] = 'gray';
                    queue.enqueue(w);
                    d[w] = d[u] + 1;
                    pred[w] = u;
                }
            }
            
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    }

    //深度优先搜索
    this.dfs = function(callback) {
        var color = initializeColor();

        for (var i = 0; i < vertices.length; ++i) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }
    }

    var dfsVisit = function(u, color, callback) {
        color[u] = 'gray';
        if (callback) {
            callback(u);
        }
        
        var neightbors = adjList.get(u);
        for (var i = 0; i < neightbors; ++i) {
            var w = neightbors[i];
            if (color[w] === 'white') {
                dfsVisit(w, color, callback);
            }
        }

        color[u] = 'black';
    }

    //改进版
    this.dfs = function(callback) {
        var color = initializeColor(),
        d = [], f = [], p = [];

        for (var i = 0; i < vertices.length; ++i) {
            f[vertices[i]] = 0;
            d[vertices[i]] = 0;
            p[vertices[i]] = 0;
        }

        for (var i = 0; i < vertices.length; ++i) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }

        return {
            discovery: d,
            finished: f,
            predecessors:p
        };

    }

    var dfsVisit = function(u, color, callback) {
        color[u] = 'gray';
        d[u] = ++time;
        if (callback) {
            callback(u);
        }
        
        var neightbors = adjList.get(u);
        for (var i = 0; i < neightbors; ++i) {
            var w = neightbors[i];
            if (color[w] === 'white') {
                p[w] = u;
                dfsVisit(w, color, callback);
            }
        }

        color[u] = 'black';
        f[u] = ++time;
        
    }



}