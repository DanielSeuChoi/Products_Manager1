import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsForms from '../components/ProductsForms';
import ProductsList from '../components/ProductsList';


const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    //loaded is considered a primitive type dependency
    // primitive : not an object has no methods or properties.
    //primitive data types: string,number,boolean,null, ...
    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [loaded]); //put loaded in the primitive array
    const reversedPro = [...products,].reverse();
    return (
        <div>
            <ProductsForms setLoaded={setLoaded} />
            <hr />
            {loaded && <ProductsList product={reversedPro} />}
        </div>
    )
}

export default Main;

