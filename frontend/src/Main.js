import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
 
class Main extends Component {
  render() {
    return (
      <div className="mainContainer d-flex flex-column">
        <Navbar></Navbar>
        <Footer></Footer>
      </div>
    );
  }
}
 
export default Main;