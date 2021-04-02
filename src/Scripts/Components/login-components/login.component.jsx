// FIREBASE AUTH
import { 
  signInWithGoogle,
  signInWithTwitter,
  signInWithFacebook,
  signInWithGithub
} from '../../Firebase/Firebase.utils.js';
// COMPONENTS
import { Button } from './button-component/button.component.jsx';
// FONTAWESOME BRAND LIBRARY ICON
import { 
  faGoogle, 
  faTwitter, 
  faFacebookF, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
// FONTAWESOME LIBRARY DEFAULT ICON
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


export const Login = () => {
  return(
    <>
      <div className="wrap-login">
        <form className="wrap-form">
          <h2 className="wrap-form__head">Login with</h2>
          <div className="wrap-btn-group">
            <Button handler={() => signInWithGoogle()} className="_brand-g" icon={ faGoogle } text="Google" />
            <Button handler={() => signInWithTwitter()} className="_brand-t" icon={ faTwitter } text="Twitter" />
            <Button handler={() => signInWithFacebook()} className="_brand-f" icon={ faFacebookF } text="Facebook" />
            <Button handler={() => signInWithGithub()} className="_brand-a" icon={ faGithub } text="GitHub" />
          </div>
          <div className="wrap-divider">
            <span className="wrap-divider__text">Or</span>
            <span className="wrap-divider__line"></span>
          </div>
          <div className="wrap-input">
            <label htmlFor="email" className="wrap-input__item label">Email</label>
            <input id="email" className="wrap-input__item input" type="email" placeholder="jon-doe@something.com"></input>
            <label htmlFor="password" className="wrap-input__item label">Password</label>
            <input id="password" className="wrap-input__item input" type="password" placeholder="12345"></input>
          </div>
          <Button className="_submit" icon={ faSignInAlt } text="Submit" />
        </form>
      </div>
    </>
  )
}
