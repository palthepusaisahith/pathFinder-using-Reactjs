import React from 'react';
import './Node.css';

// Node component definition
const Node = ({ row, col, isStart, isEnd, onMouseDownHandler, onMouseEnterHandler, onMouseLeaveHandler }) => {
    // Event handler for mouse down event
    const handleOnMouseDown = () => {
        onMouseDownHandler(row, col);
    }

    // Event handler for mouse enter event
    const handleOnMouseEnter = () => {
        onMouseEnterHandler(row, col);
    }

    // Event handler for mouse leave event
    const handleOnMouseLeave = () => {
        onMouseLeaveHandler();
    }

    return (
        <>
            {/* Define the node div with appropriate classes and event handlers */}
            <div id={`${row}-${col}`}
                className={`node ${isStart ? 'start' : ''}${isEnd ? 'end' : ''}`}
                onMouseDown={handleOnMouseDown}
                onMouseEnter={handleOnMouseEnter}
                onMouseUp={handleOnMouseLeave}
            >
                {/* Display icons for start and end nodes */}
                {isStart ? <i className="fa fas fa-asterisk"></i> : ''}
                {isEnd ? <i className="fa fas fa-bullseye"></i> : ''}

                {/* Uncomment the following line to display row and column numbers inside the node */}
                {/* {col} , {row} */}
            </div>
        </>
    )
}

export default Node; // Export the Node component as the default export
