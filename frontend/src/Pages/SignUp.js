import React from 'react';
import axios from 'axios';
import "../css/login.css";
import { Redirect } from 'react-router';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            isLoggedIn: false
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        axios.post('http://localhost:4000/auth/login', {name, email, password})
            .then((res) => {
                localStorage.setItem("my_cookie", res.data);
                document.cookie = 'my-token='+res.data.token+'; max-age=60;';
                console.log("successfully signed up");
                this.setState({isLoggedIn: true});
                this.props.login;
            })
            .catch((error) => {
                console.log(error);
            });
    };

    handleOnChange(event){
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        if(!this.state.isLoggedIn) {
            return (
                <div className="container-fluid">
                <div className="row no-gutter bg-image">

                    <div className="col-md-6 mx-auto">
                        <div className="login d-flex align-items-center py-5">

                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-10 col-xl-7 p-3 mx-auto login-round darker-shade">
                                        <h3 className="display-4 text-center mb-5">Créer un compte</h3>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group mb-3">
                                                <input onChange={this.handleOnChange} name="name" placeholder="Nom" required={true} autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4"></input>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input onChange={this.handleOnChange} name="email" type="email" placeholder="Email" required={true} autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4"></input>
                                            </div>
                                            <div className="form-group mb-3">
                                                <input onChange={this.handleOnChange} name="password" type="password" placeholder="Mot de passe" required={true} className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"></input>
                                            </div>
                                            <div className="custom-control custom-checkbox mb-3">
                                                <input id="customCheck1" type="checkbox" defaultChecked className="custom-control-input"></input>
                                                <label htmlFor="customCheck1" className="custom-control-label">Se souvenir de moi</label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="submit" value="submit" className="btn btn-primary text-uppercase mb-2 mt-4 rounded-pill shadow-sm">SE CONNECTER</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                </div>
            );
        }
        else {
            return(<Redirect to="/"></Redirect>);
        }
    };
}

export default SignUp;