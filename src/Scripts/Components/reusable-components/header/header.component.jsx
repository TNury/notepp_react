// FIREBASE AUTH
import { auth } from '../../../Firebase/Firebase.utils.js';
// REDUX CONNECT
import { connect } from 'react-redux';
// REACT-ROUTER COMPONENTS
import { Link } from 'react-router-dom';


const Header = (props) => {

  const isLoggedIn = props.reduxProps.currentUserProp;
  const text = props.drilledProps.text;

  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <Link className="header-nav__link header-nav__logo" to="/">Notepp</Link>
          { 
            isLoggedIn 
            ?
            <>
              <button onClick={() => auth.signOut()} className="header-nav__button header-nav__item">Logout</button>
              <Link className="header-nav__link header-nav__item" to="/app">Go To App</Link>
            </>
            :
            <Link className="header-nav__link header-nav__item _left" to="/login">{ text }</Link>       
          }
        </nav>
      </header>
      <div className="alert">
        <span className="alert__text">
          Hello there! As i'm still working on the app there might be some 
          bugs so be warned!
        </span>
      </div>
    </>
  )
}

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    currentUserProp: currentStore.userReducer.user
  }
})

export default connect(mapStoreToProps)(Header);