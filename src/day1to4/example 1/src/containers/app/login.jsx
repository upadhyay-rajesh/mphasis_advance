import React, { Component } from 'react';
class Login extends Component {
    state = { counter : 6 }
    render() { 
        return ( 

            <div>Hello React { this.state.counter}</div>

         );
    }
}
 
export default Login;