class Auth {
	
	static loggedIn(){
		return !!localStorage.token
	}

	static loggedOut() {
		localStorage.removeItem('token');
		localStorage.removeItem('id');
	}
}

export default Auth;
