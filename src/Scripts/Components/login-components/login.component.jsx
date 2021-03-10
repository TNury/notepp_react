// REACT ROUTER LINK COMPONENT
import {Link} from 'react-router-dom';
// COMPONENTS
import {Button} from './button-component/button.component.jsx';
import {Loading} from '../../Components/loading-component/loading.component.jsx';
// FONTAWESOME BRAND LIBRARY ICON
import {faGoogle, faTwitter, faFacebookF, faApple} from '@fortawesome/free-brands-svg-icons';
// FONTAWESOME LIBRARY DEFAULT ICON
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';


function Login() {
  return(
    <>
      {/* <Loading /> */}
      <div className="wrap-login">
        <div className="wrap-head">
          <Link className="wrap-head__logo" to="/">Notepp</Link>
        </div> 
        <form className="wrap-form">
          <h2 className="wrap-form__head">Login with</h2>
          <div className="wrap-btn-group">
            <Button className="_brand-g" icon={faGoogle} text="Google"/>
            <Button className="_brand-t" icon={faTwitter} text="Twitter"/>
            <Button className="_brand-f" icon={faFacebookF} text="Facebook"/>
            <Button className="_brand-a" icon={faApple} text="Apple"/>
          </div>
          <div className="wrap-divider">
            <span className="wrap-divider__span">Or</span>
            <span></span>
          </div>
          <div className="wrap-input">
            <label htmlFor="email" className="wrap-input__item label">Email</label>
            <input id="email" className="wrap-input__item input" type="email" placeholder="jon-doe@something.com"></input>
            <label htmlFor="password" className="wrap-input__item label">Password</label>
            <input id="password" className="wrap-input__item input" type="password" placeholder="12345"></input>
          </div>
          <Button className="_submit" icon={faSignInAlt} text="Submit" />
        </form>
      </div>
    </>
  )
}

export {Login};