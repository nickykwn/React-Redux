import React, { Component, propTypes }			from 'react';
import { connect } 								from 'react-redux';
import { bindActionCreators }					from 'redux';
import { Redirect }								from 'react-router';
import { Button,
		 Row,
		 Col, 
		 Form, 
		 FormGroup, 
		 ControlLabel }							from 'react-bootstrap';
import 	{ signUp }								from '../../actions/authenticationActions.js';

class SignUpPage extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			email: 		"",
			password: 	"",
		}

		this.handleChange 						= this.handleChange.bind(this);
		this.submit								= this.submit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: 					= e.target.value
		})
	}

	submit(e) {
		e.preventDefault();

		const data 								= {};
		data.email								= this.state.email;
		data.password							= this.state.password;

		const { signUp }						= this.props;
		signUp(data)
	}
}

function mapStateToProps(state) {
	return {
		authentication: state.authentication
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({signUp}, dispatch);
}

export default connect(mapDispatchToProps, mapDispatchToProps, SignUpPage);