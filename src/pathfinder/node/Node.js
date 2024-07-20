import React from 'react';

import './Node.css';

const Node = ({ row, col, isStart, isEnd, onMouseDownHandler, onMouseEnterHandler, onMouseLeaveHandler }) => {
    const handleOnMouseDown = () => {
        onMouseDownHandler(row, col);
    }

    const handleOnMouseEnter = () => {
        onMouseEnterHandler(row, col)
    }

    const handleOnMouseLeave = () => {
        onMouseLeaveHandler();
    }
    return (
        <>
            <div id={`${row}-${col}`}
                className={`node ${isStart ? 'start' : ''}${isEnd ? 'end' : ''}`}
                onMouseDown={handleOnMouseDown}
                onMouseEnter={handleOnMouseEnter}
                onMouseUp={handleOnMouseLeave}
            >
                {isStart ? <i className="fa fas fa-asterisk"></i> : ''}
                {isEnd ? <i className="fa fas fa-bullseye"></i> : ''}

                {/* {col} , {row} */}
            </div>
        </>
    )
}
export default Node;
