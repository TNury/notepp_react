// REACT
import React from 'react';
// REACT-ROUTER COMPONENTS
import {Route, Switch} from 'react-router-dom';
// FIREBASE AUTH
import {auth} from './Firebase/Firebase.utils.js';
// COMPONENTS
import {App} from './Components/app-components/app.jsx';
import {Home} from './Components/home-components/home.jsx';
import {Login} from './Components/login-component/login.jsx';
// APP STYLES 
import '../Styles/css/normalizer.css';
import '../Styles/css/Notepp.css';

class Notepp extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

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
          <Route exact={true} path='/' component={() => <Home currentUser={this.state.currentUser}/>}/>
          <Route exact={true} path='/app' component={App}/>
          <Route exact={true} path='/login' component={Login}/>
        </Switch>
      </>
    );
  }
}

export {Notepp};
