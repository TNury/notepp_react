// REDUX
import { connect } from 'react-redux';
// COMPONENTS 
import { Main } from './main/main.component.jsx'
import Header from '../reusable-components/header/header.component.jsx';
import { Footer } from '../reusable-components/footer/footer.component.jsx';
// FONTAWESOME COMPONENTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';


const Home = (props) => {

  const isLoggedIn = props.reduxProps.currentUserProp;

  return (
    <div className="home">
      <Header drilledProps={{
        location: 'home'
      }} />
      <div className="banner">
        <FontAwesomeIcon className="banner__icon" icon={faStickyNote} />
        <h1 className="banner__head">Welcome to Notepp!</h1>
        {
          false
          ?
          <div className="btn-group">
            <button className="btn-group__btn">Go to App!</button>
          </div>
          :
          <div className="btn-group">
            <button className="btn-group__btn">Login</button>
            <button className="btn-group__btn">Sign Up</button>
          </div>
        }
      </div>
      <Main />
      <Footer />
    </div>
  )
}

const mapStoreToProps = (currentStore) => ({
  reduxProps: {
    currentUserProp: currentStore.userReducer.user
  }
})

export default connect(mapStoreToProps)(Home);