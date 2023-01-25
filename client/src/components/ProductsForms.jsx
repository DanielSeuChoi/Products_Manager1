import React, { useState } from "react";

function ProductForms({ onSubmitHan, iniTitle, iniPrice, iniDescription }) {
    const [title, setTitle] = useState(iniTitle);
    const [price, setPrice] = useState(iniPrice);
    const [description, setDescription] = useState(iniDescription);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitHan({ title, price, description });
        setTitle("");
        setPrice("");
        setDescription("");
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                ></input>
            </p>
            <p>
                <label>Price</label>
                <input
                    name="price"
                    type="number"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                ></input>
            </p>
            <p>
                <label>Description</label>
                <textarea
                    name="description"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                ></textarea>
            </p>
            <input type="submit" />
        </form>
    );
}

export default ProductForms;
