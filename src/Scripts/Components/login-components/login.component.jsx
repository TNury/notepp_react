// FIREBASE AUTH
import { 
  signInWithGoogle,
  signInWithTwitter,
  signInWithFacebook,
  signInWithGithub
} from '../../Firebase/Firebase.utils.js';
// COMPONENTS
import { Button } from './button-component/button.component.jsx';
import { Header } from '../reusable-components/header/header.component.jsx';
import { Footer } from '../reusable-components/footer/footer.component.jsx';
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
    <div className="login-wrapper">
      <Header />
      <form className="login">
        <h2 className="login__head">Login with</h2>
        <div className="btn-group">
          <Button type="button" handler={() => signInWithGoogle()} className="_brand-g" icon={ faGoogle } text="Google" />
          <Button type="button" handler={() => signInWithTwitter()} className="_brand-t" icon={ faTwitter } text="Twitter" />
          <Button type="button" handler={() => signInWithFacebook()} className="_brand-f" icon={ faFacebookF } text="Facebook" />
          <Button type="button" handler={() => signInWithGithub()} className="_brand-a" icon={ faGithub } text="GitHub" />
        </div>
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
        <Button type="submit" handler={() => console.log('')} className="login__submit-btn" icon={ faSignInAlt } text="Submit" />
      </form>
      <Footer />
    </div>
  )
}
