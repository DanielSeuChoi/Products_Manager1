import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ProductForms(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        props.setLoaded(false);
        axios.post('http://localhost:5000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log("Response: ", res))
            .catch(err => console.log("Error: ", err));
    };


    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>
                    Title
                </label>
                <input type="text" onChange={(e) => { setTitle(e.target.value) }} value={title} ></input>
            </p>
            <p>
                <label>
                    Price
                </label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}></input>
            </p>
            <p>
                <label>
                    Description
                </label>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
            </p>
            <input type="submit" />
        </form>
    )
}

export default ProductForms;



