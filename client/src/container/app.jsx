import React, { Component }                 from 'react';
import Auth                                 from '../utils/authenticator.js';
import { Redirect }                         from 'react-router';

class App extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        if(Auth.loggedIn === false ){
            return(
                <Redirect to= {{
                    pathname: '/login',
                    state: { from: this.props.location }
                }} />
            )
        }
        return(
                <div>
                    <h2>Fo get About it!!!</h2>
                    <img src="../img/owen-wow.jpeg" alt="owen-wow"/>
                </div>
        )
    }
}

export default App
