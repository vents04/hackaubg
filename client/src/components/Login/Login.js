import React, { Component } from 'react'

import './Login.scss';

import { IoMdClose } from 'react-icons/io';

import ApiRequests from '../../classes/ApiRequests';
import Auth from '../../classes/Auth';

import { Sentry } from "react-activity";
import "react-activity/dist/library.css";

export default class Login extends Component {

    state = {
        email: "",
        password: "",
        error: "",
        showError: false,
        showLoading: false
    }

    login = () => {
        if (this.state.email === "" || this.state.password === "") {
            this.setState({
                error: "Please fill in all fields",
                showError: true
            })
        } else {
            this.setState({showLoading: true, showError: false, error: ""});
            ApiRequests.post("user/login", {}, {
                email: this.state.email,
                password: this.state.password
            }, false).then((response) => {
                Auth.setToken(response.data.token);
                this.props.showLogin(false);
                this.props.showSignup(false);
                this.props.checkAuthentication();
            }).catch((error) => {
                console.log(error);
                if (error.response) {
                    this.setState({ error: error.response.data.error, showError: true });
                } else if (error.request) {
                    this.setState({ showError: true, error: "Response not returned" });
                } else {
                    this.setState({ showError: true, error: "Request setting error" });
                }
            }).finally(() => {
                this.setState({showLoading: false})
            })
        }
    }

    render() {
        return (
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-top-bar">
                        <p className="modal-title">Login</p>
                        <IoMdClose size={24} className="icon" onClick={() => {
                            this.props.showLogin(false);
                            this.props.showSignup(false);
                        }} />
                    </div>
                    <div className="modal-content">
                        <p className="modal-input-hint">Email:</p>
                        <input type="text" placeholder="Type here" className="modal-input"
                        onInput={(evt) => {
                            this.setState({email: evt.target.value, showError: false, error: ""})
                        }}/>
                        <p className="modal-input-hint">Password:</p>
                        <input type="password" placeholder="Type here" className="modal-input"
                        onInput={(evt) => {
                            this.setState({password: evt.target.value, showError: false, error: ""})
                        }}/>
                    </div>
                    <div className="modal-footer">
                        {
                            this.state.showError
                            && <p className="error-box">{this.state.error}</p>
                        }
                        <button className="action-button" onClick={this.login}>
                            {
                                this.state.showLoading
                                ? <Sentry size={14} />
                                : "Continue"
                            }
                        </button>
                        <p className="modal-redirect-text" onClick={() => {
                            this.props.showLogin(false)
                            this.props.showSignup(true);
                        }}>Go to Signup</p>
                    </div>
                </div>
            </div>
        )
    }
}
