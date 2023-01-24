import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductsList from '../components/ProductsList';
import ProductForms from '../components/ProductsForms';


function Main() {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then((res) => {
                setProducts(res.data);
                setLoaded(true)
            })
            .catch((err) => console.error(err));
    }, [loaded]);

    const removeFromDom = (proId) => {
        setProducts(products.filter((product) => product._id !== proId));
    };

    const reversedPro = [...products,].reverse();
    return (
        <div>
            <ProductForms setLoaded={setLoaded} />
            <hr />
            {loaded && <ProductsList product={reversedPro} removeFromDom={removeFromDom} />}
        </div>
    );
}

export default Main;

