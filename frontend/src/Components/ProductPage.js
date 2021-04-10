import React from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import "../css/productPage.css";

export default class ProductPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            item: {},
            isItem: false
        };
    };

    getItem = () => {
        axios.get(`http://localhost:4000/product/${this.state.id}`)
            .then((res) => {
            this.setState({item: res.data});
            this.setState({isItem: true});
        })
        .catch((error) => {
            console.log(error);
        });
    };

    componentDidMount(){
        this.setState({id: this.props.match.params.productId}, function() {this.getItem();});
    };

    render() {
        return (
            <div className="content col-8 mx-auto my-5">
                <div className="product-header mb-5 align-numbers">{this.state.item.model}</div>
                <div className="d-flex">
                    <div className="product-gallery col-5 p-0 rounded">
                        <img className="product-image-frame" src={this.state.item.picture}></img>
                    </div>
                    <div className="product-details d-flex flex-column col-7 py-1 pl-5 pr-0">
                        <div className="m-2">
                            <h1 className="align-numbers weight-8 m-0">{this.state.item.model}</h1>
                            <h3 className="align-numbers weight-5 text-muted">{this.state.item.brand}</h3>
                        </div>
                        <div className="ml-2">
                            <div className="product-description">{this.state.item.description}</div>
                        </div>
                        <div className="ml-2 my-3">
                            <div className="product-location"><i className="fas fa-map-marker-alt mr-1"></i>{this.state.item.location}</div>
                        </div>
                        <div className="mt-auto d-flex justify-content-end">
                            <h2 className="product-price align-numbers weight-3 text-orange mr-3">{this.state.item.price}€</h2>
                            <div className="btn border-blue text-white">Ajouter au panier</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}