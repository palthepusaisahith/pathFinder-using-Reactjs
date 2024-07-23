import Queue from "../dataStructures/Queue";
import Map from "../dataStructures/Map";

// Function to perform Bi-directional Breadth-First Search (BiBFS)
export const BiBFS = (grid, startNode, endNode, bounds) => {
    // Check if startNode or endNode are invalid or if they are the same node
    if (!startNode || !endNode || startNode === endNode) {
        return [];
    }

    const { rowSize, colSize } = bounds; // Extract row and column size from bounds
    const x = [1, 0, -1, 0]; // Movement directions in the x-axis (down, right, up, left)
    const y = [0, 1, 0, -1]; // Movement directions in the y-axis (down, right, up, left)

    let qStart = new Queue(); // Queue for BFS from the start node
    let visitedStart = new Map(); // Map to track visited nodes from the start node

    let qEnd = new Queue(); // Queue for BFS from the end node
    let visitedEnd = new Map(); // Map to track visited nodes from the end node

    // Initialize the queues and visited maps with start and end nodes
    qStart.push({ row: startNode.row, col: startNode.col });
    visitedStart.set({ row: startNode.row, col: startNode.col }, 1);

    qEnd.push({ row: endNode.row, col: endNode.col });
    visitedEnd.set({ row: endNode.row, col: endNode.col }, 1);

    let visitedNodesInOrderStart = []; // To store nodes visited from start node
    let visitedNodesInOrderEnd = []; // To store nodes visited from end node

    // Perform BFS from both start and end nodes until a path is found
    while (!qStart.isEmpty() && !qEnd.isEmpty()) {
        let currStartLevel = []; // Current level nodes in BFS from start node
        let currEndLevel = []; // Current level nodes in BFS from end node
        let lsize = qStart.len(); // Number of nodes at the current level for start node BFS

        // Process all nodes at the current level from the start node
        while (lsize > 0) {
            let currRow = qStart.front().row; // Get current node row
            let currCol = qStart.front().col; // Get current node column

            currStartLevel.push({ row: currRow, col: currCol }); // Add current node to the level list
            qStart.pop(); // Remove the processed node from the queue

            // Check if the current node is the end node
            if (currRow === endNode.row && currCol === endNode.col) {
                visitedNodesInOrderStart.push(currStartLevel); // Add current level to visited nodes
                return { visStart: visitedNodesInOrderStart, visEnd: visitedNodesInOrderEnd, point: endNode };
            }

            // Check if the current node has been visited from the end node
            if (visitedEnd.has({ row: currRow, col: currCol })) {
                visitedNodesInOrderStart.push(currStartLevel); // Add current level to visited nodes
                return { visStart: visitedNodesInOrderStart, visEnd: visitedNodesInOrderEnd, point: grid[currRow][currCol] };
            }

            // Explore neighbors of the current node
            for (let i = 0; i < 4; i++) {
                let nextRow = currRow + x[i]; // Calculate next row
                let nextCol = currCol + y[i]; // Calculate next column

                // Check if the next cell is within bounds
                if (!(nextRow < 0) && !(nextCol < 0) && !(nextRow >= rowSize) && !(nextCol >= colSize)) {
                    let ele = grid[nextRow][nextCol]; // Get the next cell

                    if (ele.wall) continue; // Skip walls

                    const obj = {
                        row: ele.row,
                        col: ele.col
                    };
                    // If the next cell is not visited yet, add it to the queue
                    if (!visitedStart.has(obj)) {
                        qStart.push(obj);
                        visitedStart.set(obj, 1);
                        grid[nextRow][nextCol].front = grid[currRow][currCol];
                    }
                }
            }
            lsize -= 1; // Decrement the level size counter
        }

        lsize = qEnd.len(); // Number of nodes at the current level for end node BFS
        // Process all nodes at the current level from the end node
        while (lsize > 0) {
            let currRow = qEnd.front().row; // Get current node row
            let currCol = qEnd.front().col; // Get current node column

            currEndLevel.push({ row: currRow, col: currCol }); // Add current node to the level list
            qEnd.pop(); // Remove the processed node from the queue

            // Check if the current node is the start node
            if (currRow === startNode.row && currCol === startNode.col) {
                visitedNodesInOrderEnd.push(currEndLevel); // Add current level to visited nodes
                return { visStart: visitedNodesInOrderStart, visEnd: visitedNodesInOrderEnd, point: endNode };
            }

            // Check if the current node has been visited from the start node
            if (visitedStart.has({ row: currRow, col: currCol })) {
                visitedNodesInOrderEnd.push(currEndLevel); // Add current level to visited nodes
                return { visStart: visitedNodesInOrderStart, visEnd: visitedNodesInOrderEnd, point: grid[currRow][currCol] };
            }

            // Explore neighbors of the current node
            for (let i = 0; i < 4; i++) {
                let nextRow = currRow + x[i]; // Calculate next row
                let nextCol = currCol + y[i]; // Calculate next column

                // Check if the next cell is within bounds
                if (!(nextRow < 0) && !(nextCol < 0) && !(nextRow >= rowSize) && !(nextCol >= colSize)) {
                    let ele = grid[nextRow][nextCol]; // Get the next cell

                    if (ele.wall) continue; // Skip walls

                    const obj = {
                        row: ele.row,
                        col: ele.col
                    };
                    // If the next cell is not visited yet, add it to the queue
                    if (!visitedEnd.has(obj)) {
                        qEnd.push(obj);
                        visitedEnd.set(obj, 1);
                        grid[nextRow][nextCol].back = grid[currRow][currCol];
                    }
                }
            }
            lsize -= 1; // Decrement the level size counter
        }

        visitedNodesInOrderStart.push(currStartLevel); // Add the current level to visited nodes
        visitedNodesInOrderEnd.push(currEndLevel); // Add the current level to visited nodes

        // Check if all nodes have been visited (edge case for no possible path)
        if (visitedStart.len() + visitedEnd.len() === rowSize * colSize) {
            alert("No possible path found");
            return [];
        }
    }

    alert("No Possible path");
    return { visStart: visitedNodesInOrderStart, visEnd: visitedNodesInOrderEnd, point: null };
}

// Function to reconstruct the path from the intersection node
export const getPathBiBFS = (intersectionNode) => {
    let pathFront = []; // Path from the start node to the intersection node
    let pathBack = []; // Path from the end node to the intersection node
    let node = intersectionNode;

    // Trace back the path from the intersection node to the start node
    while (node !== null) {
        pathFront.push(node);
        node = node.front;
    }

    node = intersectionNode; // Reset node to the intersection node
    // Trace back the path from the intersection node to the end node
    while (node != null) {
        pathBack.push(node);
        node = node.back;
    }

    // Combine the front path and back path to get the complete path
    let path = pathFront.concat(pathBack.reverse());
    return path;
}
