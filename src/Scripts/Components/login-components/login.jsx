// FIREBASE AUTH
import { signInWithGoogle, signInWithTwitter, signInWithFacebook, signInWithGithub } from '../../Firebase/Firebase.utils.js';
// COMPONENTS
import { Header } from '../reusable-components/header/header.jsx';
import { Button } from '../reusable-components/button/button.jsx';
import { Footer } from '../reusable-components/footer/footer.jsx';
// FONTAWESOME ICONS
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faTwitter, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';


export const Login = () => {
  
  return(
    <div className="login-wrapper">
      <Header />
      <form className="login">
        <h2 className="login__head">Login with</h2>
        <div className="button-wrap">
          <Button handler={ signInWithGoogle } icon={ faGoogle } modifier="_brand-g"  text="Google" type="button" />
          <Button handler={ signInWithTwitter } icon={ faTwitter } modifier="_brand-t"  text="Twitter" type="button" />
          <Button handler={ signInWithFacebook } icon={ faFacebookF } modifier="_brand-f"  text="Facebook" type="button" />
          <Button handler={ signInWithGithub } icon={ faGithub } modifier="_brand-git"  text="GitHub" type="button" />
        </div>
        <div className="divider">
          <span className="divider__text">Or</span>
          <span className="divider__line"></span>
        </div>
        <div className="input-group">
          <label htmlFor="email" className="input-group__item">Email</label>
          <input id="email" className="input-group__item _input" type="email" placeholder="jon-doe@something.com" required />
          <label htmlFor="password" className="input-group__item">Password</label>
          <input id="password" className="input-group__item _input" type="password" placeholder="12345" required />
        </div>
        <div className="button-wrap">
          <Button handler={ null } icon={ faSignInAlt } modifier="_submit" text="Submit" type="submit" />
        </div>
      </form>
      <Footer />
    </div>
  )
}
