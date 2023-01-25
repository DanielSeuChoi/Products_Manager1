import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForms from '../components/ProductsForms';
import DeleteButton from '../components/DeleteButton';


function Update() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:5000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [id]);
    const updateProduct = product => {
        axios.put('http://localhost:5000/api/products/' + id, product)

            .then(res => {
                navigate("/");
                console.log(res);
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {loaded && (
                <>
                    <ProductForms
                        onSubmitHan={updateProduct}
                        iniDescription={product.description}
                        iniPrice={product.price}
                        iniTitle={product.title}
                    />
                    <DeleteButton proId={product._id} successCallBack={() => navigate("/")} />
                </>
            )}
        </div>
    )
}

export default Update;