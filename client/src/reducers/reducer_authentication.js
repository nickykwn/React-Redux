var DEFAULT_STATE = {
	login: 			{},
	signup: 		"",
	logout: 		"",
	user: 			{},
	email: 			"",
	password: 		"",
}

const login 	= ( state, action ) => {

	let newState 		= {};
	let login			= action.payload;

	Object.assign(newState, state, {login});
	return newState;
}

const signup 	= ( state, action ) => {

	let newState 		= {};
	let signup			= action.payload;

	Object.assign(newState, state, {signup});
	return newState;
}

const logout 	= ( state, action ) => {

	let newState		= {};
	let signup			= action.payload;

	Object.assign(newState, state, {logout});
	return newState;
}

const user		= ( state, action ) => {

	let newState		= {};
	let user			= action.payload;

	Object.assign(newState, state, {user});
	return newState;
}

const email		= ( state, action ) => {

	let newState		= {};
	let email			= action.payload;

	Object.assign(newState, state, {email});
	return newState;
}

const password  = ( state, action ) => {

	let newState		= {};
	let password 		= action.payload;

	Object.assign(newState, state, {password});
	return newState;
}


export default function(state = [], action) {
	switch(action.type) {
		case 'SIGN_UP':
			return signup(state, action);
		case 'LOG_IN':
			return login(state, action);
		case 'LOG_OUT':
			return logout(state, action);
		case 'USER_INFO':
			return user(state, action);
		case 'CHANGE_EMAIL':
			return email(state, action);
		case 'CHANGE_PASSWORD':
			return password(state, action);
		default:
			return state;
	}
}