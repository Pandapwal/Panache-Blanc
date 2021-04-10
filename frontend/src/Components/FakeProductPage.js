import React from 'react';
import {useParams} from "react-router-dom";
import productsData from "../FakeData/productsData";
import "../css/productPage.css";

export default function ProductPage() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)

    return (
        <div className="content col-8 mx-auto my-5">
            <div className="product-header mb-5 align-numbers">{thisProduct.model}</div>
            <div className="d-flex">
                <div className="product-gallery col-5 p-0 rounded">
                    <img className="product-image-frame" src={thisProduct.picture}></img>
                </div>
                <div className="product-details d-flex flex-column col-7 py-1 pl-5 pr-0">
                    <div className="m-2">
                        <h1 className="align-numbers weight-8 m-0">{thisProduct.model}</h1>
                        <h3 className="align-numbers weight-5 text-muted">{thisProduct.brand}</h3>
                    </div>
                    <div className="ml-2">
                        <div className="product-description">{thisProduct.description}</div>
                    </div>
                    <div className="ml-2 my-3">
                        <div className="product-location"><i className="fas fa-map-marker-alt mr-1"></i>{thisProduct.location}</div>
                    </div>
                    <div className="mt-auto d-flex justify-content-end">
                        <h2 className="product-price align-numbers weight-3 text-orange mr-3">{thisProduct.price}€</h2>
                        <div className="btn border-blue text-white">Ajouter au panier</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ProductPage.defaultProps = {    
    model: "produit",    
    brand: "marque",    
    picture: "https://cf.ltkcdn.net/garden/images/orig/240019-1600x1030-pine-trees.jpg",
    price: "123,45",
    description: "description du produit",
    location: "Lieu de production",
    category: "autre"
}