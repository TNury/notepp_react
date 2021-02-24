import {Link} from 'react-router-dom';

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
            <i className="fab fa-google"></i>
            <span className="wrap-btn__text">Google</span>
          </button>
          <button className="wrap-btn _brand-t">
            <i className="fab fa-twitter"></i>
            <span className="wrap-btn__text">Twitter</span>
          </button>
          <button className="wrap-btn _brand-f">
            <i className="fab fa-facebook-f"></i>
            <span className="wrap-btn__text">Facebook</span>
          </button>
          <button className="wrap-btn _brand-a">
            <i className="fab fa-apple"></i>
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
          <i className="fas fa-sign-in-alt"></i>
          <span className="wrap-btn__text">Submit</span>
        </button>    
      </form>
    </div>
  )
}

export {Login};