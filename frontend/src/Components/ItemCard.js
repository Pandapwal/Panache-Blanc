import React from 'react';
import "../css/item-card.css";

export default class ItemCard extends React.Component{
    render() {
        return (
            <div className="this.props-card default-dark"> <img className="card-img-top this.props-img" src={this.props.picture}/>
                <div className="this.props-card-body">
                    <div className="d-flex align-items-start justify-content-between">
                        <div className="d-flex flex-column p-1">
                            <h3 className="model weight-6 align-numbers">{this.props.model}</h3>
                            <div className="brand">{this.props.brand}</div>
                            <div className="text-orange align-numbers price">{this.props.price}€</div>
                        </div>
                        <div className="row">
                            <div className="btn">
                                <span className="fas fa-shopping-cart"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ItemCard.defaultProps = {    
    model: "produit",    
    brand: "marque",    
    picture: "https://cf.ltkcdn.net/garden/images/orig/240019-1600x1030-pine-trees.jpg",
    price: "123,45",
    description: "description du produit",
    location: "Lieu de this.propsion",
    category: "autre"
}