import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsForms from '../components/ProductsForms';
import ProductsList from '../components/ProductsList';


const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [loaded]);
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

