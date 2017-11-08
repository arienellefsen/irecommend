import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Login from './Login/Login';
import NotFound from './NotFound/NotFound';

class Main extends Component{
    
    render(){
      return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </div>
     </BrowserRouter>
      )
    }
  }
export default Main;