import React, {useState} from "react";
import './App.scss';
import Counter from './components/Counter';

export default function AppCounter(){
    const [count, setCount] = useState(0);
    const handleClick = () => setCount((prev) => prev + 1);
    return (
        <>
            <hr></hr>
            <div className="ex-counter">
                <div className="container">
                    <h2>Counter</h2>
                    <div className="banner">
                        Total Count : {count} {count > 10 ? '🔥' : '❄️'}
                    </div>
                    <div className="counters">
                        <Counter total={count} onClick={handleClick}/>
                        <Counter total={count} onClick={handleClick}/>
                    </div>
                </div>  
            </div>
        </>
    
    );
}   