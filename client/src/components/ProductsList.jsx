import React from 'react';
import { Link } from 'react-router-dom';

const ProductsList = (props) => {

    return (
        <div>
            {props.product.map((product, i) => {
                return <p key={i} i={i}>
                    <Link to={"/" + product._id}>
                        {product.title}
                    </Link>
                </p>
            }
            )
            }
        </div>
    )
}

export default ProductsList