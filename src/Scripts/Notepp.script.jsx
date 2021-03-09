// REACT
import React from 'react';
// REACT-ROUTER COMPONENTS
import {Route, Switch, Redirect} from 'react-router-dom';
// FIREBASE AUTH
import {auth} from './Firebase/Firebase.utils.js';
// COMPONENTS
import {App} from './Components/app-components/app.component.jsx';
import {Home} from './Components/home-components/home.component.jsx';
import {Login} from './Components/login-components/login.component.jsx';
import {NotFound} from './Components/not-found-component/notFound.component.jsx';
// APP STYLES 
import './normalizer.scss';
import './Notepp.styles.scss';


class Notepp extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  // IDEA: PERHAPS USE LOCAL STORAGE TO CONTROL USER STATE

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Switch>
          {/* HOMEPAGE ROUTE */}
          <Route exact path='/'>
            <Home currentUser={this.state.currentUser} />
          </Route>
          {/* APP ROUTE
            
            If the user is logged in, the route /app becomes
            available, if he tries to manually change to 
            /app he will be redirected to login page
          */}
          <Route path='/app'>
            { this.state.currentUser 
              ? 
              <App currentUser={this.state.currentUser} />
              :
              // Don't forget to <Redirect /> 
              <></>
            }
          </Route>
          {/* LOGIN ROUTE 
            
            If the user is logged in, the /login route becomes
            unavailable, if he tries to manually change to /login
            he will be redirected to /app.
          */}
          <Route path='/login'>
            { this.state.currentUser
              ?
              <Redirect from='/login' to='/app' />
              :
              <Login />
            }
          </Route>
          {/* 404 ROUTE 
          
            If there's no route for the current URL, the 404
            page gets rendered.
          */}
          <Route path='/*' component={NotFound} />
        </Switch>
      </>
    );
  }
}

export {Notepp};
