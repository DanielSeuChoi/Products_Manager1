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
        setProducts(products.filter((products) => products._id !== proId));
    };
    const createProduct = product => {
        axios.post('http://localhost:5000/api/products', product)
            .then(res => {
                setProducts([...products, res.data]);
            })
    }

    const reversedPro = [...products,].reverse();
    return (
        <div>
            <ProductForms onSubmitHan={createProduct} iniTitle="" iniPrice="" iniDescription="" />
            <hr />
            {loaded && <ProductsList setLoaded={setLoaded} product={reversedPro} removeFromDom={removeFromDom} />}
        </div>
    );
}

export default Main;

