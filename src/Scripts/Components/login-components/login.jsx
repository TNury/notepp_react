// COMPONENTS
import { Header } from '../reusable-components/header/header.jsx';
import { ButtonGroup } from './button-group/button-group.jsx';
import { Footer } from '../reusable-components/footer/footer.jsx';
// FONTAWESOME COMPONENT 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// FONTAWESOME LIBRARY DEFAULT ICON
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


export const Login = () => {
  
  return(
    <div className="login-wrapper">
      <Header />
      <form className="login">
        <h2 className="login__head">Login with</h2>
        <ButtonGroup />
        <div className="divider">
          <span className="divider__text">Or</span>
          <span className="divider__line"></span>
        </div>
        <div className="input-group">
          <label htmlFor="email" className="input-group__item _label">Email</label>
          <input id="email" className="input-group__item _input" type="email" placeholder="jon-doe@something.com" required />
          <label htmlFor="password" className="input-group__item _label">Password</label>
          <input id="password" className="input-group__item _input" type="password" placeholder="12345" required />
        </div>
        <button type="submit" className="submit-btn" >
          <FontAwesomeIcon className="submit-btn__icon" icon={faSignInAlt} />
          <span className="submit-btn__text">Submit</span>
        </button>
      </form>
      <Footer />
    </div>
  )
}
