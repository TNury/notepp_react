// REACT
import React from 'react';
// REACT-ROUTER COMPONENTS
import { Route, Switch, Redirect } from 'react-router-dom';
// FIREBASE AUTH
import { auth, db } from './Firebase/Firebase.utils.js';
// REDUX
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/actions/user-actions/user-actions.js';
// COMPONENTS
import App from './Components/app-components/app.component.jsx';
import { Home } from './Components/home-components/home.component.jsx';
import { Login } from './Components/login-components/login.component.jsx';
import { NotFound } from './Components/not-found-component/notFound.component.jsx';
// APP STYLES 
import './normalizer.scss';
import './Notepp.styles.scss';


export class Notepp extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged( (currentUser) => {

      if (currentUser) {
        this.props.reduxActions.setCurrentUser(currentUser);
        this.createUserProfileDoc(currentUser);
      }

    })

  }

  createUserProfileDoc(currentUser) {

    if (!currentUser) return;

    const userDocRef = db.doc(`users/${currentUser.displayName}`);
    
    const creationDate = new Date();

    userDocRef.set({
      createdAt: creationDate
    })


    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    const isLoggedIn = this.props.reduxProps.currentUserProp;

    return (
      <>
        <Switch>
          {/* HOMEPAGE ROUTE */}
          <Route exact path='/'>
            <Home />
          </Route>
          {/* APP ROUTE */}
          <Route path='/app'>
            {
              isLoggedIn
              ?
              <App />
              :
              // Don't forget to <Redirect /> 
              <></>
            }
          </Route>
          {/* LOGIN ROUTE */}
          <Route path='/login'>
            {
              isLoggedIn
              ?
              <Redirect from='/login' to='/app' />
              :
              <Login />
            }
          </Route>
          {/* 404 ROUTE */}
          <Route path='/*' component={ NotFound } />
        </Switch>
      </>
    );
  }
}


const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    currentUserProp: currentStore.userReducer.user
  }
})

const mapDispatchToProps = (dispatch) => ({
  reduxActions: {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
})

export default connect(mapStoreToProps, mapDispatchToProps)(Notepp);
