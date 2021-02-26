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
import {NotFound} from './Components/not-found-component/notFound.jsx';
import {Loading} from './Components/loading-component/loading.jsx';
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
          <Route exact path='/'>
            {this.state.currentUser
              ?
              <Redirect from='/' to='/app' />
              :
              <Home currentUser={this.state.currentUser}/>
            }
          </Route>
          <Route path='/app'>
            {this.state.currentUser 
              ? 
              <App currentUser={this.state.currentUser} />
              : 
              <Redirect from='/app' to='/login'/>
            }
          </Route>
          <Route path='/login'>
            {this.state.currentUser
              ?
              <Redirect from='/login' to='/app'/>
              :
              <Login />
            }
          </Route>
          <Route path='/*' component={NotFound} />
        </Switch>
      </>
    );
  }
}

export {Notepp};
