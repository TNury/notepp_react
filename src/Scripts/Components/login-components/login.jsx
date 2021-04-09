// FIREBASE AUTH
import { signInWithGoogle, signInWithTwitter, signInWithFacebook, signInWithGithub } from '../../Firebase/Firebase.utils.js';
// COMPONENTS
import { Header } from '../reusable-components/header/header.jsx';
import { Button } from '../reusable-components/button/button.jsx';
import { Footer } from '../reusable-components/footer/footer.jsx';
// FONTAWESOME COMPONENT 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <Button type="button" handler={() => signInWithGoogle} modifier="_brand-g" icon={faGoogle} text="Google"/>
          <Button type="button" handler={() => signInWithTwitter} modifier="_brand-t" icon={faTwitter} text="Twitter"/>
          <Button type="button" handler={() => signInWithFacebook} modifier="_brand-f" icon={faFacebookF} text="Facebook"/>
          <Button type="button" handler={() => signInWithGithub} modifier="_brand-git" icon={faGithub} text="GitHub"/>
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
        <div className="button-wrap">
          <Button type="submit" handler={() => console.log('Hi')} modifier="_submit" icon={faSignInAlt} text="Submit" />
        </div>
      </form>
      <Footer />
    </div>
  )
}
