import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
const helpers = require("../utils/helpers");
import FacebookLogin from 'react-facebook-login';


class Login extends Component {
    responseFacebook(response) {
    helpers.saveUser();
    console.log(response);
    console.log("Name: "+response.name);
    console.log("pic: "+response.picture.data.url);
    console.log("userid: "+response.userID);
}
      render() {
        return (
            <div>
                <div className="container-fluid text-center login--btn__home">
                  <FacebookLogin
                        appId="144711106077097"
                        autoLoad={true}
                        fields="name,email,picture"
                        scope="public_profile,user_friends,user_actions.books"
                        callback={this.responseFacebook}
                  />
                </div>
            </div>
        );
      }
    }

export default Login;