import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const OneProduct = (props) => {
    const [product, setProduct] = useState({})
    const [deleter, setDelete] = useState("");
    const navigate = useNavigate();
    const { id } = useParams(); //id is considered a primitive dependency
    useEffect(() => {
        axios.get('http://localhost:5000/api/products/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, [id]); //thats why we put id in here

    const deleteHandler = e => {
        axios.delete('http://localhost:5000/api/products/' + id)
            .then(res => {
                navigate("/")
                console.log(res);
            })
            .catch((err) => console.error(err))
    };

    return (
        <div>
            <div><Link to={"/"}>Back</Link></div>
            <Link to={"/" + product._id + "/edit"}>Edit</Link>
            <div>
                <h2>Title : {product.title}</h2>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
            <button onClick={(e) => { deleteHandler(product._id) }}>Delete</button>
        </div>
    )
}

export default OneProduct;