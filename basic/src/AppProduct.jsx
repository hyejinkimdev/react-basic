import React, {useState} from "react";
import './App.scss';
import Product from './components/Product';

export default function AppProduct(){
    const [count, setCount] = useState(0);
    const handleClick = () => setCount((prev) => prev + 1);
    return (
        <>
            <hr></hr>
            <div className="ex-counter">
                <div className="container">
                    <h2>Product</h2>
                    <div className="products">
                        <Product />
                    </div>
                </div>  
            </div>
        </>
    );
}   