import React, {Component} from 'react';
const helpers = require("../utils/helpers");

class Login extends Component {
    onClick() {
        // axios request
        helpers.saveUser();
      }

      render() {
        return (
          <button onClick={() => this.onClick() }>Login with Facebook</button>
        );
      }
    }

export default Login;