import PriorityQueue from '../dataStructures/PriorityQueue';
import Map from '../dataStructures/Map';

export const djikstra = (grid, startNode, endNode, bounds) => {
    if (!startNode || !endNode || startNode === endNode) {
        return [];
    }

    startNode.distance = 0;
    const { rowSize, colSize } = bounds;
    const x = [1, 0, -1, 0];
    const y = [0, 1, 0, -1];

    let pq = new PriorityQueue();
    let visited = new Map();

    pq.insert(startNode);
    visited.set({ row: startNode.row, col: startNode.col }, 1);


    let visitedNodesInOrder = [];
    while (!pq.isEmpty()) {
        let curr = pq.extractMin();

        visitedNodesInOrder.push(curr);

        if (curr === endNode) {
            console.log("end node found");
            return visitedNodesInOrder;
        }

        let distance = curr.distance;
        for (let i = 0; i < 4; i++) {
            let nextRow = curr.row + x[i];
            let nextCol = curr.col + y[i];

            if (!(nextRow < 0) && !(nextCol < 0) && !(nextRow >= rowSize) && !(nextCol >= colSize)) {
                let ele = grid[nextRow][nextCol];
                if (ele.wall) continue;
                if (!visited.has({ row: ele.row, col: ele.col })) {
                    ele.distance = distance + 1;
                    pq.insert(ele);
                    visited.set({ row: ele.row, col: ele.col }, 1);
                    grid[nextRow][nextCol].previous = grid[curr.row][curr.col];
                }
            }
        }

        if (visited.len() === rowSize * colSize) {
            // all nodes have been travelled
            // EDGE CASE
            alert("No possible path found");
            return [];
        }

    }
    alert("No Possible path");
    return visitedNodesInOrder;
}

export const getPathDjikstra = (endNode) => {
    let path = [];
    let currNode = endNode;
    while (currNode !== null) {
        path.push(currNode);
        currNode = currNode.previous;
    }

    return path;
}