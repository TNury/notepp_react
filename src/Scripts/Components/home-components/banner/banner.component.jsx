// REDUX
import { connect } from 'react-redux';
// REACT-ROUTER
import { Link } from 'react-router-dom';
// FONTAWESOME COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';


const Banner = (props) => {

  const isLoggedIn = props.reduxProps.currentUserProp;

  return (
    <div className="banner-container">
      <div className="banner">
        <FontAwesomeIcon className="banner__icon" icon={faStickyNote} />
        <h1 className="banner__head">Welcome to Notepp!</h1>
      </div>
      {
        isLoggedIn
        ?
        <div className="link-group">
          <Link className="link-group__link" to="/app">Go to App!</Link>
        </div>
        :
        <div className="link-group">
          <Link className="link-group__link" to="/login">Login</Link>
          <Link className="link-group__link _left" to="/login">Sign Up</Link>
        </div>
      }
    </div>
  )
}

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    currentUserProp: currentStore.userReducer.user
  }
})

export default connect(mapStoreToProps)(Banner);