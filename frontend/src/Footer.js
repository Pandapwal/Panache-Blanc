import React from 'react';
import Logo from './img/footer_logo.png';
import "./css/footer.css";
 
class Footer extends React.Component {
  render() {
    return (
    <footer className=" footer default-dark">
      <div className="container pt-5">
        <div className="row py-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <img src={Logo} alt="footer logo" width="180" className="mb-3"></img>
            <p className="font-italic text-muted">Aucune limite, lmao yeet</p>
            <ul className="list-inline social-media mt-4">
              <li className="list-inline-item mr-3"><a href="https://twitter.com/IllestBrand" target="_blank" title="twitter"><i className="fab fa-twitter fa-2x"></i></a></li>
              <li className="list-inline-item mr-3"><a href="https://www.facebook.com/ILLEST/" target="_blank" title="facebook"><i className="fab fa-facebook fa-2x"></i></a></li>
              <li className="list-inline-item mr-3"><a href="https://www.instagram.com/illest/" target="_blank" title="instagram"><i className="fab fa-instagram fa-2x"></i></a></li>
              <li className="list-inline-item mr-3"><a href="https://youtu.be/6qzg_BsBkXo" target="_blank" title="youtube"><i className="fab fa-youtube fa-2x"></i></a></li>
              
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Site</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="/products" className="default-gray">Produits</a></li>
              <li className="mb-2"><a href="/stuff" className="default-gray">Événements</a></li>
              <li className="mb-2"><a href="/contact" className="default-gray">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Vision</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="#" className="default-gray">Valeurs</a></li>
              <li className="mb-2"><a href="#" className="default-gray">Équipe</a></li>
              <li className="mb-2"><a href="#" className="default-gray">À propos</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p className="text-muted mb-4">Afin de ne rien rater et être au courant des dernières nouveautés !</p>
            <div className="p-1 rounded border">
              <div className="input-group">
                <input type="email" placeholder="Entrez votre adresse email" aria-describedby="button-addon1" className="form-control border-0 shadow-0"></input>
                <div className="input-group-append">
                  <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="extra-dark py-4">
        <div className="container text-center">
          <p className="copyrights text-muted mb-0 py-2">© 2021 <strong>Panache Blanc</strong> tous droits réservés</p>
        </div>
      </div>
    </footer>
    );
  }
}
 
export default Footer;