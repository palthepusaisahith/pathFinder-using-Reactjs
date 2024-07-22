import React from 'react';
import Navbar from './navbar/NavBar';
import PathFinder from './pathfinder/PathFinder';
import './App.css';

/*
    This comment block describes the schema for a 2D array.
    Each element of the 2D array represents a node with row and column properties.

    SCHEMA OF THE 2D ARRAY
    [
        [{row, col}, {row, col}, {row, col}],
        [{row, col}, {row, col}, {row, col}],
        [{row, col}, {row, col}, {row, col}]
    ]
*/

const App = () => {

    // Function to handle click events, reloading the page
    const clickhandler = () => {
        window.location.reload();
    }

    return (
        <div className='bodyWrapper'>
            {/* Rendering the Navbar component */}
            <Navbar/>
            {/* 
                <h4 className='heading'> Visualize the algorithms </h4> 
                Commented out heading for future use if needed
            */}
            <div className='util'>
                <div> 
                    {/* Disabled color input for representing wall color */}
                    <input className='color' type="color" value={'#02030a'} disabled /> Wall
                </div>
                {/* 
                    <div> 
                        <button onClick={clickhandler} className="utilButton"> clear Board </button> 
                    </div>
                    Commented out button for clearing the board, which uses clickhandler function
                */}
            </div>
            <div className='main'>
                {/* Rendering the PathFinder component */}
                <PathFinder />
            </div>
        </div>
    )
}

export default App;
