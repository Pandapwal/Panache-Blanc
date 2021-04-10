import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import "../css/color.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="flex justify-content-center">
            { this.props.title 
                ? <h1 className="block mt-3">{this.props.title}</h1>
                : null
            }
        </div>
        <div className="d-flex justify-content-center">
            <img
                className="header-image"
                alt={this.props.title}
                src={this.props.image}>
            </img>
            <div className="transform-center justify-content-center">
              <div className="flex justify-content-center header-title">
                <h1 className={this.props.effects1}>{this.props.text1}</h1>
                <h1 className={this.props.effects2}>{this.props.text2}</h1>
              </div>
              <Link to={this.props.link} className={`d-inline-block button2 dark-shade white-border ${ this.props.color }`}>
                {this.props.action}
              </Link>
            </div>
        </div>
    </div>
    );
  }
}

Header.defaultProps = {    
    title: "TITLE",    
    image: "https://cf.ltkcdn.net/garden/images/orig/240019-1600x1030-pine-trees.jpg",    
    text1: "text1",
    text2: "text2",
    effects1: "normal",
    effects2: "normal",
    action: "CLIQUER",
    color: "default-blue-hover",
    link: '/'
  }
 
export default Header;