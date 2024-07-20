import React, { useEffect, useState } from 'react';
import Node from './node/Node';
import { BFS, getPathBFS } from '../algorithms/BFS';
import { djikstra, getPathDjikstra } from '../algorithms/djikstra';
import { BiBFS, getPathBiBFS } from '../algorithms/BiBFS';
import Button from 'react-bootstrap/Button';

import './PathFinder.css';


const START_ROW = 5;
const START_COL = 3;
const END_ROW = 9;
const END_COL = 34;

const ROWS = 15;
const COLS = 45;

const PathFinder = () => {
    const [grid, setGrid] = useState([]);
    const [startNode, setStartNode] = useState(null);
    const [endNode, setEndNode] = useState();
    const [wallCreationStarted, setWallCreation] = useState(false);
    const [clearBoard, setClearboard] = useState(true);


    const bounds = {
        rowSize: ROWS,
        colSize: COLS
    }
    useEffect(() => {
        const arr = [];
        for (let row = 0; row < ROWS; row++) {
            let column = [];
            for (let col = 0; col < COLS; col++) {
                const currNode = {
                    row,
                    col,
                    isStart: row === START_ROW && col === START_COL,
                    isEnd: row === END_ROW && col === END_COL,
                    isVisited: false,
                    previous: null,
                    wall: false,
                    distance: Infinity,
                    front: null,
                    back: null
                }
                if (currNode.isStart) {
                    setStartNode(currNode);
                }
                if (currNode.isEnd) {
                    setEndNode(currNode);
                }
                column.push(currNode);
            }
            arr.push(column);
        }
        setGrid(arr);
    }, []);

    const getNewGrid = (row, col) => {
        let arr = [...grid];
        arr[row][col].wall = !arr[row][col].wall;
        const node = document.getElementById(`${row}-${col}`);
        node.classList.toggle('wall');
        setGrid(arr);
    }

    const mouseDownHandler = (row, col) => {
        if (!(row === START_ROW && col === START_COL) && !(row === END_ROW && col === END_COL)) {
            getNewGrid(row, col);
            setWallCreation(true);
        }
    }

    const mouseEnterHandler = (row, col) => {
        if (wallCreationStarted) {
            if (!(row === START_ROW && col === START_COL) && !(row === END_ROW && col === END_COL)) {
                getNewGrid(row, col);
            }
        }
    }

    const mouseLeaveHandler = () => {
        setWallCreation(false);
    }

    const renderNodes = () => {
        return grid.map((row) => {
            return row.map((cell) => {
                const { row, col, isStart, isEnd, isVisited } = cell;
                return (
                    <Node
                        row={row}
                        col={col}
                        isStart={isStart}
                        isEnd={isEnd}
                        isVisited={isVisited}
                        wallCreationStarted={wallCreationStarted}
                        onMouseDownHandler={mouseDownHandler}
                        onMouseEnterHandler={mouseEnterHandler}
                        onMouseLeaveHandler={mouseLeaveHandler}
                    />
                )
            });
        });
    }

    const animateBFS = (visitedArr, path) => {
        for (let i = 0; i < visitedArr.length; i++) {
            for (let j = 0; j < visitedArr[i].length; j++) {
                if ((i === visitedArr.length - 1) && (j === visitedArr[i].length - 1)) {
                    setTimeout(() => {
                        animateShortestPath(path);
                    }, 100 * i);
                }

                setTimeout(() => {
                    const row = visitedArr[i][j].row;
                    const col = visitedArr[i][j].col;

                    const id = `${row}-${col}`;
                    const node = document.getElementById(id);
                    node.classList.add('visited');
                }, 100 * i);

            }
        }
    }

    const animateDjikstra = (visitedArr, path) => {

        for (let i = 0; i < visitedArr.length; i++) {
            if (i === visitedArr.length - 1) {
                setTimeout(() => {
                    animateShortestPath(path);
                }, 15 * i);
            }

            setTimeout(() => {
                const row = visitedArr[i].row;
                const col = visitedArr[i].col;

                const id = `${row}-${col}`;

                const node = document.getElementById(id);
                node.classList.add('visited');
            }, 15 * i);

        }
    }

    const animateBiBFS = (result) => {
        let visStart = result.visStart;
        let visEnd = result.visEnd;

        // let n = Math.max(visStart.length, visEnd.length);
        for (let i = 0; i < visStart.length; i++) {
            for (let j = 0; j < visStart[i].length; j++) {
                if ((i === visStart.length - 1) && (j === visStart[i].length - 1)) {
                    setTimeout(() => {
                        animateShortestPath(result.path);
                    }, 100 * i);
                }

                setTimeout(() => {
                    const row = visStart[i][j].row;
                    const col = visStart[i][j].col;

                    const id = `${row}-${col}`;
                    const node = document.getElementById(id);
                    node.classList.add('visited');
                }, 100 * i);

            }
        }

        for (let i = 0; i < visEnd.length; i++) {
            for (let j = 0; j < visEnd[i].length; j++) {
                if ((i === visStart.length - 1) && (j === visStart[i].length - 1)) {
                    setTimeout(() => {
                        animateShortestPath(result.path);
                    }, 100 * i);
                }

                setTimeout(() => {
                    const row = visEnd[i][j].row;
                    const col = visEnd[i][j].col;

                    const id = `${row}-${col}`;
                    const node = document.getElementById(id);
                    node.classList.add('visited');
                }, 100 * i);

            }
        }
    }

    const animateShortestPath = (path) => {
        console.log(path);
        for (let i = 0; i < path.length; i++) {
            setTimeout(() => {
                const row = path[i].row;
                const col = path[i].col;

                const id = `${row}-${col}`;
                const node = document.getElementById(id);
                node.classList.add('path');
            }, 50 * i);
        }
    }



    const handleOnClickBFS = () => {
        if (clearBoard) {
            const visitedArr = BFS(grid, startNode, endNode, bounds);
            const path = getPathBFS(endNode);
            animateBFS(visitedArr, path);
            setClearboard(false);
        }
        else {
            alert("Please clear the board first");
        }
    }

    const handleOnClickDijkstra = () => {
        if (clearBoard) {
            const visitedArr = djikstra(grid, startNode, endNode, bounds);
            const path = getPathDjikstra(endNode);
            console.log(visitedArr);
            console.log(path);
            animateDjikstra(visitedArr, path);
            setClearboard(false);

        }
        else {
            alert("please clear the board first");
        }

    }

    const handleOnClickBiBFS = () => {
        if (clearBoard) {
            const result = BiBFS(grid, startNode, endNode, bounds);
            console.log(result);
            if (result.point) {
                result.path = getPathBiBFS(result.point);
            }
            animateBiBFS(result);
            setClearboard(false);
        }
        else {
            alert("please clear the board first");
        }

    }

    return (
        <div className='pathFindWrapper'>
            <div className='buttons'>
                <Button variant="success" className='desc_button' onClick={handleOnClickBFS} > Visualize BFS </Button>
                <Button variant="success" className='desc_button'onClick={handleOnClickDijkstra}> Visualize Djikstra </Button>
                <Button variant="success" className='desc_button'onClick={handleOnClickBiBFS}> Visualize Bi-directional BFS </Button>
            </div>
            <div className='grid'>
                {renderNodes()}
            </div>
        </div>
    )
}
export default PathFinder;