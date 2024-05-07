import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';

const API_URL = 'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product';

const App = () => {

    const [product1, setProduct1] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [size, setSize] = useState(-1);

    const productData = async() => {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        setProduct1(data)
        setSizes(data.sizeOptions)
        console.log(data)

    }
    useEffect(() => {
        productData();

    }, []);
    
    return (
        <div className='app'>
            <h1 className='EcommerceName'>Ecommerce Name</h1>

            <container className='navbar'>

            </container>

            <div className='productPage'>
                <h2 className='title'>
                    {product1.title}
                </h2>

                <container className='productImage'>
                    <img src={product1.imageURL} alt='product picture'></img>
                    
                </container>
                <container className='productDescription'>
                    <p>
                        {product1.description}
                    </p>

                </container>
                <container className='productSizeOptions'>
                    {sizes.map((size) => 
                        <button className='sizeButtons'>{size.label}</button>
                    ) }

                </container>
                <container className='addToCart'>
                    <button className='addToCartButton'>Add to Cart</button>
                </container>

            </div>


        </div>
    );
}

export default App;