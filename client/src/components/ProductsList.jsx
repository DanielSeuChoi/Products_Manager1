import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

function ProductsList({ product, setLoaded }) {
    const removeFromDom = (proId) => {
        product.filter(products => products._id !== proId);
        setLoaded(false);
    };
    return (
        product && product.map(products => {
            return (
                <div key={products._id}>
                    <div>
                        <Link to={"/" + products._id}>
                            {products.title}
                        </Link>
                        | |
                        <DeleteButton proId={products._id} successCallBack={() => removeFromDom(products._id)}>Delete Product</DeleteButton>
                    </div>

                </div>
            )
        })
    );
}

export default ProductsList;