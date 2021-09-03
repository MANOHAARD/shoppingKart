import { React } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products)

    const renderList = products.map((product) => {
        return (
            <div className="ui three column grid" key={product.id}>
                <div className="column">
                    <div className="ui segment">
                        <div className="ui card" style={{ marginTop: "20px" }}>
                            <div className="image">
                                <img src={product.image} alt="User" />
                            </div>className
                            <div className="content">
                                <Link
                                    to={`/product/${product.id}`}>
                                    <h3
                                        className="header">
                                        {product.title}
                                    </h3>
                                </Link>
                                <p> {product.category} </p>
                                <h4> Price: ${product.price}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div>
            {renderList}
        </div>
    )
}

export default ProductComponent;