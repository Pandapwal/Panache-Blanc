import React from 'react';
import axios from 'axios';
import getCookie from './getCookie';

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
      <div className="content col-lg-8 col-xs-12 mx-auto">
        <h1>You have successfully logged in. Now, you have access to this page!</h1>
        <h2>List of items:</h2>
        <div>{this.state.user.name}</div>
        <div>{this.state.user.role}</div>
        <div>{this.state.user.email}</div>
        <button onClick={this.logout} className="btn border-blue rounded-pill text-white">déconnexion</button>
      </div>
    );
  };
};
