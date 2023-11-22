import React, {useEffect, useState} from "react";

export default function Product() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data/products.json') //fetch : 브라우저 제공 API, data 접근
        .then(res => res.json()) // json 형태로 가져옴
        .then( data => {
            console.log('데이터를 네트워크에서 잘 받아옴!🔥');
            setProducts(data);
        })
    },[]);
    return () => {
        console.log('🧹깨끗하게 청소하는 일들을 합니다');
    };


    return (
        <>
            <ul>
                {products.map( (product) => (
                    <li key={product.id}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    )
}