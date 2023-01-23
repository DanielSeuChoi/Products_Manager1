import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const OneProduct = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    useEffect(() => {
        axios.get('http://localhost:5000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, []);
    return (
        <div>
            <div><Link to={"/"}>Back</Link></div>
            <Link to={"/" + product._id + "/edit"}>Edit</Link>
            <div>
                <h2>Title : {product.title}</h2>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
        </div>
    )
}

export default OneProduct;