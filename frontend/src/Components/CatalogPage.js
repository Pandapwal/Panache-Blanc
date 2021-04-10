import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import FakeCatalog from "./FakeCatalog";
import "../css/item-card.css";

export default class CatalogPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isItem: false
        };
    };

    getItems = () => {
        axios.get('http://localhost:4000/items')
            .then((res) => {
            this.setState({items: res.data});
            this.setState({isItem: true});
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
    componentDidMount(){
        this.getItems();
    };
    
    render(){
        if (this.state.isItem) {
            const products = this.state.items.map(product => {
                let model = product.model;
                model = model.replace(/\s+/g, '-');
                const url = `/products/${product._id}/${model}`;
                return (
                    <Link to={url} className="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1 my-lg-2 my-2" key={product._id}>
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
        else {
            return(
                <FakeCatalog></FakeCatalog>
            );
        }
    };
};