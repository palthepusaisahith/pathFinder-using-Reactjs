
# pathfinder using react

A pathfinder application using React visualizes different pathfinding algorithms, helping users find the shortest path between two points on a grid. React, a JavaScript library for building user interfaces, is ideal for creating a dynamic and interactive tool where users can set start and end points, place obstacles, and see the pathfinding process in real-time. The grid is represented by a 2D array, with each cell being a node (open path), a wall (obstacle), the start point, or the end point, and state management in React handles the grid’s state and user interactions.

Three key pathfinding algorithms can be implemented: Dijkstra’s algorithm, Breadth-First Search (BFS), and Bidirectional BFS. Dijkstra’s algorithm finds the shortest path by continually exploring the closest unvisited node and updating the shortest known distance to each neighboring node, ensuring it works on both weighted and unweighted grids.


## Deployment

To deploy this project run


-npx create pathfinder-using-react

-cd pathfinder-using react
-npm start

-npm install react-scripts



## Features
**Dijkstra's Algorithm**: Finds the shortest path from the start node to the end node on a weighted grid.
- **Breadth-First Search (BFS)**: Explores nodes level by level, guaranteeing the shortest path on an unweighted grid.
- **Bidirectional BFS**: Performs two simultaneous BFS searches from both the start and end nodes, meeting in the middle for faster results.
- **Interactive Grid**: Users can set start and end points, place obstacles, and visualize the pathfinding process in real-time.
- **Dynamic Visualization**: Animates the pathfinding process, showing visited nodes and the final path.


## Prerequisites
- Node.js (Download from [nodejs.org](https://nodejs.org/))
## References

React Documentation

Create React App Documentation

Dijkstra's Algorithm - GeeksforGeeks

Breadth-First Search - GeeksforGeeks

CSS-Tricks

MDN Web Docs - JavaScript

Bidirectional Search - Wikipedia
## License

[MIT](https://choosealicense.com/licenses/mit/)


Copyright (c) [2024] [palthepu sai sahith]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

