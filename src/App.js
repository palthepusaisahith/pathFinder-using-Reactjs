import React from 'react';
import Navbar from './navbar/NavBar';
import PathFinder from './pathfinder/PathFinder';
import './App.css';
/*

1. Create a 2D array
2. Each 2D array will be a node

    /
        SCHEMA OF THE 2D ARRAY
        [
            [{row , col} , {row , col} , {row , col}]
            [{row , col} , {row , col} , {row , col}]
            [{row , col} , {row , col} , {row , col}]
        ]
    /

*/
const App = () => {

    const clickhandler = () => {
        window.location.reload();
    }

    return (
        <div className='bodyWrapper'>
            <Navbar/>
            {/* <h4 className='heading'> Visualize the algorithms </h4> */}
            <div className='util'>
                <div> <input className='color' type="color" value={'#02030a'} disabled /> Wall</div>
                {/* <div> <button onClick={clickhandler} className="utilButton"> clear Board </button> </div> */}
            </div>
            <div className='main'>
                <PathFinder />
            </div>
        </div>

    )
}

export default App;