import React, { Component } 			from 'react';
import { logIn }						from '../microcomponents/authentication/login.jsx';
import { signUp }						from '../microcomponents/authentication/signup.jsx';

class authentication extends Component {
	construction(props){
		super(props)
		this.login 				this.login.bind(this);
		this.signup 			this.signup.bind(this);
	}

	signup() {
		return (
			<Signup />
		)
	}

	login() {
		return (
			<Login />
		)
	}

	authenticationRender() {
		let { pathname } = this.props.location;

		switch (pathname) {
			case "/signup":
				return this.signup();
			case "/login":
				return this.login();
			default:
				return
		}
	}

	render () {
		return(
			<div>
				{ this.authenticationRender(); }
			</div>
		)
	}
}

export default Authentication