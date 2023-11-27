
import React, { useState } from "react";

export default function Counter({total, onClick}){
    // let num = 0;
    const [count, setCount] = useState(0);
    return (
        <>
        <div className="counter">
            <span className="number">
                {count} <span className="total">/{total}</span>
            </span>
            <button className="button" onClick={() => {
                // num++; 자바스크립트 작동되지 않음
                // count++; 
                // console.log(num);
                // setCount(count + 1);
                setCount((prev) => prev + 1);
                onClick();

            }}>Add +</button>
        </div>
        </>
        
    );
}
 