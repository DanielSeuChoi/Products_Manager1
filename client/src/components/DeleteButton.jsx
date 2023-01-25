import React from 'react'
import axios from 'axios';

function DeleteButton({ successCallBack, proId }) {

    const deleteProduct = (e) => {
        axios.delete('http://localhost:5000/api/products/' + proId)
            .then(res => {
                successCallBack();
                console.log(res)
            })
            .catch((err) => console.error(err));
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

export default DeleteButton