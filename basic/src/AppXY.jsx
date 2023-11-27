import React, { useState } from 'react';
import './AppXY.scss';

export default function AppXY(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    return (
        <div className="container" onMouseMove={(e) => {
            console.log(e.clientX, e.clientY);
            setX(e.clientX);
            setY(e.clientY); 
        }}>
            <div className="pointer" style={{ transform :  `translate(${x}px, ${y}px)`}}></div>
        </div>
    );
}