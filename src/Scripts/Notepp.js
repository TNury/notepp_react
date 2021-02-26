// REACT
import React from 'react';
// REACT-ROUTER COMPONENTS
import {Route, Switch, Redirect} from 'react-router-dom';
// FIREBASE AUTH
import {auth} from './Firebase/Firebase.utils.js';
// COMPONENTS
import {App} from './Components/app-components/app.jsx';
import {Home} from './Components/home-components/home.jsx';
import {Login} from './Components/login-components/login.jsx';
import {notFound} from './Components/not-found-component/notFound.jsx';
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
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  /*
    What needs to happen:

    1. 
  */

  render() {
    return (
      <>
        <Switch>
          <Route exact path='/'>
            <Home currentUser={this.state.currentUser}/>
          </Route>
          <Route path='/app'>
            {this.state.currentUser 
              ? 
                <App currentUser={this.state.currentUser} />
              :
                <Redirect to='/login'/>
            }
          </Route>
          <Route path='/login'>
            {this.state.currentUser
              ?
                <Redirect to='/app'/>
              :
                <Login />
            }
          </Route>
          <Route path='/*' component={notFound} />
        </Switch>
      </>
    );
  }
}

export {Notepp};
