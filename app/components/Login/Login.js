import React, {Component} from 'react';
const helpers = require("../utils/helpers");
import FacebookLogin from 'react-facebook-login';

class Login extends Component {
    responseFacebook(response) {
      console.log(response);
    }

    Login() {
        // axios request
        helpers.saveUser();
      }

      render() {
        return (
            <div>
              <button onClick={() => this.Login() }>Login with Facebook</button>
              <FacebookLogin
                    appId="144711106077097"
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="public_profile,user_friends,user_actions.books"
                    callback={this.responseFacebook}
                    />
            </div>
        );
      }
    }

export default Login;