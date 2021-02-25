// REACT ROUTER LINK COMPONENT
import {Link} from 'react-router-dom';
// FONTAWESOME ICON LIBRARY COMPONENT
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// FONTAWESOME BRAND LIBRARY ICON
import {faGoogle, faTwitter, faFacebookF, faApple} from '@fortawesome/free-brands-svg-icons';
// FONTAWESOME LIBRARY DEFAULT ICON
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';


function Login() {
  return(
    <div className="wrap-login">
      <div className="wrap-head">
        <Link className="wrap-head__logo" to="/">Notepp</Link>
      </div> 
      <form className="wrap-form">
        <h2 className="wrap-form__head">Login with</h2>
        <div className="wrap-btn-group">
          <button className="wrap-btn _brand-g">
            {/* <i className="fab fa-google"></i> */}
            <FontAwesomeIcon icon={faGoogle}/>
            <span className="wrap-btn__text">Google</span>
          </button>
          <button className="wrap-btn _brand-t">
            <FontAwesomeIcon icon={faTwitter} />
            <span className="wrap-btn__text">Twitter</span>
          </button>
          <button className="wrap-btn _brand-f">
            <FontAwesomeIcon icon={faFacebookF} />
            <span className="wrap-btn__text">Facebook</span>
          </button>
          <button className="wrap-btn _brand-a">
            <FontAwesomeIcon icon={faApple} />
            <span className="wrap-btn__text">Apple</span>
          </button>
        </div>
        <div className="wrap-divider">
          <span></span>
          <span className="wrap-divider__span">Or</span>
        </div>
        <div className="wrap-input">
          <label className="wrap-input__item label">Email</label>
          <input className="wrap-input__item input" type="email" placeholder="jon-doe@something.com"></input>
          <label className="wrap-input__item label">Password</label>
          <input className="wrap-input__item input" type="password" placeholder="12345"></input>
        </div>
        <button className="wrap-btn _submit" type="submit">
          <FontAwesomeIcon icon={faSignInAlt} />
          <span className="wrap-btn__text">Submit</span>
        </button>    
      </form>
    </div>
  )
}

export {Login};