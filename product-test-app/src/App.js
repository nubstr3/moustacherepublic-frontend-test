import React from 'react';
import {useEffect } from 'react';

const API_URL = 'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product';

const App = () => {

    const productData = async() => {
        const response = await fetch(API_URL);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        productData();

    }, []);

    return (
        <h1>App</h1>
    );
}

export default App;