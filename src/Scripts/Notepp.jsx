// REACT
import React from 'react';
// REACT-ROUTER COMPONENTS
import { Route, Switch, Redirect } from 'react-router-dom';
// FIREBASE AUTH
import { auth, db } from './Firebase/Firebase.utils.js';
// REDUX
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/actions/user-actions/user-actions.js';
// PAGE COMPONENTS
import App from './Components/app-components/app.component.jsx';
import { Home } from './Components/home-components/home.jsx';
import { Login } from './Components/login-components/login.jsx';
import { NotFound } from './Components/not-found-component/notFound.jsx';
// STYLES
import './normalizer.scss';
import './Notepp.scss';


export class Notepp extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged( (currentUser) => {

        this.props.reduxActions.setCurrentUser(currentUser);
        this.createUserProfileDoc(currentUser);

    })

  }

  createUserProfileDoc(currentUser) {

    if (!currentUser) return;

    const userDocRef = db.doc(`users/${currentUser.uid}`);
    
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
              <Redirect from='/app' to='/login'/>
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
