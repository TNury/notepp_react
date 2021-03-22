// REACT
import React from 'react';
// REACT-ROUTER COMPONENTS
import { Route, Switch, Redirect } from 'react-router-dom';
// FIREBASE AUTH
import { auth, db, createUserProfileDocument } from './Firebase/Firebase.utils.js';
// REDUX
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/actions/actions.js';
// COMPONENTS
import { App } from './Components/app-components/app.component.jsx';
import { Home } from './Components/home-components/home.component.jsx';
import { Login } from './Components/login-components/login.component.jsx';
import { NotFound } from './Components/not-found-component/notFound.component.jsx';
// APP STYLES 
import './normalizer.scss';
import './Notepp.styles.scss';


export class Notepp extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (currentUser) => {
    
      if (currentUser) {

        const userRef = await createUserProfileDocument(currentUser);

        userRef.onSnapshot((user) => {
          this.props.setCurrentUser({
            id: user.id,
            ...user.data()
          });
        });

      } else {

        this.props.setCurrentUser(null);
        
      }
    })

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
            <Home />
          </Route>
          {/* APP ROUTE
          
          If the user is logged in, the route /app becomes
          available, if he tries to manually change to 
          /app he will be redirected to login page
        */}
          <Route path='/app'>
            {this.props.currentUser
              ?
              <App />
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
            {this.props.currentUser
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


const mapStateToProps = (currentState) => ({
  currentUser: currentState.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notepp);
