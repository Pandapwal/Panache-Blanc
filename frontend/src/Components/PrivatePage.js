import React from 'react';
import axios from 'axios';
import getCookie from './getCookie';
import "../css/profile.css";

export default class PrivatePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: []
    };
    this.logout = this.logout.bind(this);
  };

  logout() {
    localStorage.clear();
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    this.props.setAuth(false);
    window.location.href = '/';
  }

  updateState = () => {
    let token = getCookie('my-token');
    axios.get('http://localhost:4000/auth/register', {headers: {'x-json-web-token': token}})
      .then((res) => {
        this.setState({user: res.data});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount(){
    this.updateState();
  };

  render(){
    return(
      <div className="content profile-container">
        <div className="col-12 cover"></div>
        <div className="col-md-8 col-xs-12 mx-auto">
          <div className="content mx-auto profile d-flex justify-content-center">
            <div className="profile-picture"><img className="rounded-circle" src="https://picsum.photos/200"></img></div>
            <div className="mt-auto mb-5">
              <h3 className="mx-3">{this.state.user.name}</h3>
              <h6>{this.state.user.email}</h6>
            </div>
          </div>
          <div className="content profile-info">
            {this.state.user.email}
          </div>
          <h3 className="col">Commandes passées</h3>
        </div>
      </div>
    );
  };
};
