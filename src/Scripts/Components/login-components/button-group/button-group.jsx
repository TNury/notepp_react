// FIREBASE AUTH
import {
  signInWithGoogle,
  signInWithTwitter,
  signInWithFacebook,
  signInWithGithub
} from '../../../Firebase/Firebase.utils.js';
// COMPONENTS
import { Button } from './button/button.jsx';
// FONTAWESOME BRAND LIBRARY ICON
import {
  faGoogle,
  faTwitter,
  faFacebookF,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

export const ButtonGroup = () => {
  return (
    <div className="btn-group">
      <Button type="button" handler={() => signInWithGoogle()} className="_brand-g" icon={faGoogle} text="Google" />
      <Button type="button" handler={() => signInWithTwitter()} className="_brand-t" icon={faTwitter} text="Twitter" />
      <Button type="button" handler={() => signInWithFacebook()} className="_brand-f" icon={faFacebookF} text="Facebook" />
      <Button type="button" handler={() => signInWithGithub()} className="_brand-a" icon={faGithub} text="GitHub" />
    </div>
  )
}