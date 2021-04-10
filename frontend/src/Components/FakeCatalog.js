import React from 'react';
import { Link } from "react-router-dom";
import ItemCard from "../Components/ItemCard";
import "../css/item-card.css";

import productsData from "../FakeData/productsData";

export default class FakeCatalog extends React.Component{

    render() {
        const products = productsData.map(product => {
            let model = product.model;
            model = model.replace(/\s+/g, '-');
            const url = `/fakeproducts/${product.id}/${model}`;
            return (
                <Link to={url} className="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1 my-lg-2 my-2" key={product.id}>
                    <div className="product-card default-dark"> <img className="card-img-top product-img" src={product.picture}/>
                        <div className="product-card-body">
                            <div className="d-flex align-items-start justify-content-between">
                                <div className="d-flex flex-column p-1">
                                    <h3 className="model weight-6 align-numbers">{product.model}</h3>
                                    <div className="brand">{product.brand}</div>
                                    <div className="text-orange align-numbers price">{product.price}€</div>
                                </div>
                                <div className="row">
                                    <div className="btn">
                                        <span className="fas fa-shopping-cart"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            );
        });
        return (
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    {products}
                </div>
            </div>
        );
    }
}

FakeCatalog.defaultProps = {    
    model: "produit",    
    brand: "marque",    
    picture: "https://cf.ltkcdn.net/garden/images/orig/240019-1600x1030-pine-trees.jpg",
    price: "123.45"
  }