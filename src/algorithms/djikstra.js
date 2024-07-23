import PriorityQueue from '../dataStructures/PriorityQueue';
import Map from '../dataStructures/Map';

// Function to perform Dijkstra's Algorithm
export const djikstra = (grid, startNode, endNode, bounds) => {
    // Early exit if startNode or endNode is invalid or if they are the same
    if (!startNode || !endNode || startNode === endNode) {
        return [];
    }

    // Initialize the distance for the start node
    startNode.distance = 0;
    const { rowSize, colSize } = bounds; // Extract grid bounds
    const x = [1, 0, -1, 0]; // Movement directions in the x-axis (down, right, up, left)
    const y = [0, 1, 0, -1]; // Movement directions in the y-axis (down, right, up, left)

    let pq = new PriorityQueue(); // Priority queue to store nodes based on distance
    let visited = new Map(); // Map to keep track of visited nodes

    pq.insert(startNode); // Add start node to the priority queue
    visited.set({ row: startNode.row, col: startNode.col }, 1); // Mark start node as visited

    let visitedNodesInOrder = []; // To store the order of visited nodes

    // Process nodes until the priority queue is empty
    while (!pq.isEmpty()) {
        let curr = pq.extractMin(); // Extract the node with the minimum distance from the queue

        visitedNodesInOrder.push(curr); // Add current node to the list of visited nodes

        // Check if we have reached the end node
        if (curr === endNode) {
            console.log("end node found");
            return visitedNodesInOrder; // Return the list of visited nodes if end node is found
        }

        let distance = curr.distance; // Current node's distance from the start node

        // Explore neighbors of the current node
        for (let i = 0; i < 4; i++) {
            let nextRow = curr.row + x[i]; // Calculate next row based on movement direction
            let nextCol = curr.col + y[i]; // Calculate next column based on movement direction

            // Check if the next cell is within bounds
            if (!(nextRow < 0) && !(nextCol < 0) && !(nextRow >= rowSize) && !(nextCol >= colSize)) {
                let ele = grid[nextRow][nextCol]; // Get the next cell

                if (ele.wall) continue; // Skip walls

                // Check if the next cell is not visited yet
                if (!visited.has({ row: ele.row, col: ele.col })) {
                    ele.distance = distance + 1; // Update the distance for the next cell
                    pq.insert(ele); // Add the next cell to the priority queue
                    visited.set({ row: ele.row, col: ele.col }, 1); // Mark the next cell as visited
                    grid[nextRow][nextCol].previous = grid[curr.row][curr.col]; // Set the previous node
                }
            }
        }

        // Check if all nodes have been visited (edge case for no possible path)
        if (visited.len() === rowSize * colSize) {
            alert("No possible path found");
            return [];
        }
    }

    alert("No Possible path");
    return visitedNodesInOrder; // Return the list of visited nodes if no path is found
}

// Function to reconstruct the path from the end node
export const getPathDjikstra = (endNode) => {
    let path = []; // To store the reconstructed path
    let currNode = endNode; // Start from the end node

    // Trace back the path from the end node to the start node
    while (currNode !== null) {
        path.push(currNode); // Add current node to the path
        currNode = currNode.previous; // Move to the previous node
    }

    return path; // Return the reconstructed path
}
