import axios from 'axios';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setproducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    //console.log(products)

    const fetchAllProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err", err)
            });

        dispatch(setproducts(response.data));
    }

    useEffect(() => {
        fetchAllProducts();
    }, [])

    console.log(products)

    return (
        <div className="main" style={{ marginTop: "20px" }}>
            <h3> Product Listings:</h3>
            <ProductComponent />
        </div>
    )
}

export default ProductListing;