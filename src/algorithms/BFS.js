import Queue from "../dataStructures/Queue";
import Map from "../dataStructures/Map";

export const BFS = (grid, startNode, endNode, bounds) => {
    // console.log(grid, startNode, endNode, bounds);
    if (!startNode || !endNode || startNode === endNode) {
        return [];
    }
    const { rowSize, colSize } = bounds;
    const x = [1, 0, -1, 0];
    const y = [0, 1, 0, -1];

    let q = new Queue();
    let visited = new Map();

    q.push({ row: startNode.row, col: startNode.col });
    visited.set({ row: startNode.row, col: startNode.col }, 1);

    let visitedNodesInOrder = [];
    while (!q.isEmpty()) {
        // console.log("inside first hello");
        let currLevel = [];
        let lsize = q.len();

        while (lsize > 0) {
            let currRow = q.front().row;
            let currCol = q.front().col;

            currLevel.push({ row: currRow, col: currCol });
            q.pop();

            if (currRow === endNode.row && currCol === endNode.col) {
                visitedNodesInOrder.push(currLevel);
                return visitedNodesInOrder;
            }
            for (let i = 0; i < 4; i++) {
                let nextRow = currRow + x[i];
                let nextCol = currCol + y[i];

                // console.log(nextRow, nextCol);

                if (!(nextRow < 0) && !(nextCol < 0) && !(nextRow >= rowSize) && !(nextCol >= colSize)) {
                    // this cell is valid
                    let ele = grid[nextRow][nextCol];

                    if (ele.wall) continue;

                    const obj = {
                        row: ele.row,
                        col: ele.col
                    }
                    if (!visited.has(obj)) {
                        // the cell is not yet visited
                        q.push(obj);
                        visited.set(obj, 1);
                        grid[nextRow][nextCol].previous = grid[currRow][currCol];
                    }
                }
            }
            lsize = lsize - 1;
        }

        visitedNodesInOrder.push(currLevel);
        if (visited.len() === rowSize * colSize) {
            // all nodes have been travelled
            // EDGE CASE
            alert("No possible path found");
            return [];
        }
    }
    alert("No Possible path");
    return visitedNodesInOrder;
    // console.log("broken")
}

export const getPathBFS = (endNode) => {
    let path = [];
    let node = endNode;
    while (node !== null) {
        path.push(node);
        node = node.previous;
    }

    return path;
}