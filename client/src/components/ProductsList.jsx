import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductsList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (idsz) => {
        axios.delete('http://localhost:5000/api/products/' + idsz)
            .then(res => {
                removeFromDom(idsz)
            })
            .catch((err) => console.error(err))
    };
    return (
        <div>
            {props.product.map((product, i) => {
                return <p key={i} i={i}>
                    <Link to={"/" + product._id}>
                        {product.title}
                    </Link>
                    <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
                </p>
            }
            )
            }
        </div>
    )
}

export default ProductsList