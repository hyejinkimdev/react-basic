import React, {useState} from "react";
import './App.scss';
import Products from './components/Products';

export default function AppProducts(){
    const [showProducts, setShowProducts] = useState(true);
    return (
        <>
            <hr></hr>
            <div className="ex-counter">
                <div className="container">
                    <h2>Product</h2>
                    <div className="products">
                        {showProducts && <Products />}
                        <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
                    </div>
                </div>  
            </div>
        </>
    );
}   