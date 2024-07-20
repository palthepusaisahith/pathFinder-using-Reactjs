import Queue from "../dataStructures/Queue";
import Map from "../dataStructures/Map";
export const BiBFS = (grid, startNode, endNode, bounds) => {
    if (!startNode || !endNode || startNode === endNode) {
        return [];
    }
    const { rowSize, colSize } = bounds;
    const x = [1, 0, -1, 0];
    const y = [0, 1, 0, -1];

    let qStart = new Queue();
    let visitedStart = new Map();

    let qEnd = new Queue();
    let visitedEnd = new Map();

    qStart.push({ row: startNode.row, col: startNode.col });
    visitedStart.set({ row: startNode.row, col: startNode.col }, 1);

    qEnd.push({ row: endNode.row, col: endNode.col });
    visitedEnd.set({ row: endNode.row, col: endNode.col }, 1);

    let visitedNodesInOrderStart = [];
    let visitedNodesInOrderEnd = [];

    while (!qStart.isEmpty() && !qEnd.isEmpty()) {
        let currStartLevel = [];
        let currEndLevel = [];
        let lsize = qStart.len();

        while (lsize > 0) {
            let currRow = qStart.front().row;
            let currCol = qStart.front().col;

            currStartLevel.push({ row: currRow, col: currCol });
            qStart.pop();

            if (currRow === endNode.row && currCol === endNode.col) {
                visitedNodesInOrderStart.push(currStartLevel);
                return { visStart: visitedNodesInOrderStart, visEnd: visitedNodesInOrderEnd, point: endNode };
            }

            if (visitedEnd.has({ row: currRow, col: currCol })) {
                // Then we have found the intersection point
                visitedNodesInOrderStart.push(currStartLevel);
                return { visStart: visitedNodesInOrderStart, visEnd: visitedNodesInOrderEnd, point: grid[currRow][currCol] };
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
                    if (!visitedStart.has(obj)) {
                        // the cell is not yet visited
                        qStart.push(obj);
                        visitedStart.set(obj, 1);
                        grid[nextRow][nextCol].front = grid[currRow][currCol];
                    }
                }
            }
            lsize = lsize - 1;
        }


        lsize = qEnd.len();
        while (lsize > 0) {
            let currRow = qEnd.front().row;
            let currCol = qEnd.front().col;

            currEndLevel.push({ row: currRow, col: currCol });
            qEnd.pop();

            if (currRow === startNode.row && currCol === startNode.col) {
                visitedNodesInOrderEnd.push(currEndLevel);
                return { visStart: visitedNodesInOrderStart, visEnd: visitedNodesInOrderEnd, point: endNode };
            }

            if (visitedStart.has({ row: currRow, col: currCol })) {
                // Then we have found the intersection point
                visitedNodesInOrderEnd.push(currEndLevel);

                return { visStart: visitedNodesInOrderStart, visEnd: visitedNodesInOrderEnd, point: grid[currRow][currCol] };
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
                    if (!visitedEnd.has(obj)) {
                        // the cell is not yet visited
                        qEnd.push(obj);
                        visitedEnd.set(obj, 1);
                        grid[nextRow][nextCol].back = grid[currRow][currCol];
                    }
                }
            }
            lsize = lsize - 1;
        }

        visitedNodesInOrderStart.push(currStartLevel);
        visitedNodesInOrderEnd.push(currEndLevel);
        if (visitedStart.len() + visitedEnd.len() === rowSize * colSize) {
            // all nodes have been travelled
            // EDGE CASE
            alert("No possible path found");
            return [];
        }
    }
    alert("No Possible path");
    return { visStart: visitedNodesInOrderStart, visEnd: visitedNodesInOrderEnd, point: null };
}

export const getPathBiBFS = (intersectionNode) => {
    let pathFront = [];
    let pathBack = [];
    let node = intersectionNode;

    while (node !== null) {
        pathFront.push(node);
        node = node.front;
    }

    node = intersectionNode;
    while (node != null) {
        pathBack.push(node);
        node = node.back;
    }

    let path = pathFront.concat(pathBack);
    return path;
}