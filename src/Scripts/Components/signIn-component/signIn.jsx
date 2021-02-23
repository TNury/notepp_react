

function SignIn() {
  return(
    <form className="wrap-form">
      <h1 className="wrap__head">Login</h1>
      <div className="wrap-btn-group">
        <button className="wrap-btn">
          <i className="fab fa-google"></i>
          <span className="wrap-btn__text">Google</span>
        </button>
        <button className="wrap-btn">
          <i class="fab fa-twitter"></i>
          <span className="wrap-btn__text">Twitter</span>
        </button>
        <button className="wrap-btn">
          <i class="fab fa-facebook-f"></i>
          <span className="wrap-btn__text">Facebook</span>
        </button>
        <button className="wrap-btn">
          <i class="fab fa-apple"></i>
          <span className="wrap-btn__text">Apple</span>
        </button>
      </div>
      <strong>OR</strong>
      <div className="input-wrap">
        <label className="input-wrap__item label">Email</label>
        <input className="input-wrap__item input" type="email" boilerplate="jon-doe@gmail.com"></input>
        <label className="input-wrap__item label">Password</label>
        <input className="input-wrap__item input" type="password" boilerplate="12345"></input>
      </div>
      <button className="wrap-btn" type="submit">
        <i class="fas fa-sign-in-alt"></i>
        <span className="wrap-btn__text">Submit</span>
      </button>    
    </form>
  )
}

export {SignIn};