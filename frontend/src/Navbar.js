import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink,
    Redirect
  } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Catalog from "./Components/CatalogPage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ProductPage from "./Components/ProductPage";
import FakeProductPage from "./Components/FakeProductPage";
import isAuthenticated from "./Components/isAuthenticated";
import PrivateRoute from './Components/PrivateRoute';
import PrivatePage from './Components/PrivatePage';
import SuperPrivatePage from './Components/SuperPrivatePage';
import Page404 from "./Components/Page404";
import "./css/navbar.css"
import Logo from './img/footer_logo.png';
 
class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: isAuthenticated()
    };
    this.setAuth = this.setAuth.bind(this);
  };

  setAuth = (auth) => {
    this.setState({isLoggedIn: auth});
  }

  render() {
    let rightTab;
    if(this.state.isLoggedIn) {
      rightTab = <li><NavLink to='/private'>Compte</NavLink></li>;
    }
    else {
      rightTab =
      <React.Fragment>
        <li><NavLink to='/login'>Connexion</NavLink></li>
        <li><NavLink to='/register'>Créer un compte</NavLink></li>
      </React.Fragment>;
    }

    return (
        <BrowserRouter>
            <nav className="navbar navbar-dark navbar-expand-lg py-0 default-dark sticky-top">
                <div className="container">
                    <a href="#" className="navbar-brand py-2">
                        <img src={Logo} width="45" alt="" class="d-inline-block align-middle mr-2"/>
                        <span class="italic weight-3 mr-2">Panache</span>
                        <span class="weight-6">Blanc</span>
                    </a>

                    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

                    <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li><NavLink exact to='/'>Accueil</NavLink></li>
                            <li><NavLink to='/products'>Produits</NavLink></li>
                            <li><NavLink to='/stuff'>Événements</NavLink></li>
                            <li className="last-link"><NavLink to='/contact'>Contact</NavLink></li>
                            {rightTab}
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/stuff" component={Stuff}/>
                <Route path="/contact" component={Contact}/>
                <Route exact path="/products" component={Catalog}/>
                <Route path="/products/:productId" component={ProductPage}/>
                <Route path="/fakeproducts/:productId"><FakeProductPage/></Route>
                <Route path="/login"><Login setAuth={this.setAuth}/></Route>
                <Route path="/register"><SignUp setAuth={this.setAuth}/></Route>

                {/* private routes */}
                <PrivateRoute path='/private'><PrivatePage setAuth={this.setAuth}/></PrivateRoute>
                <PrivateRoute path='/superprivate'><SuperPrivatePage /></PrivateRoute>

                <Route path="/404" component={Page404} />
                    <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    );
  }
}
 
export default Navbar;