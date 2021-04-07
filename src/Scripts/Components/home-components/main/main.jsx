
export const Main = () => {
 
  return (
    <main className="main-container">
      <div className="container">
        <div className="column _col-1">
          <h2 className="column__head">What is Notepp?</h2>
          <p className="column__p">
            Notepp is a simple note-taking app i've developed for
            my portfolio, it started as a simple idea for a
            sticky notes app, but as my ambition grew it took form as
            a full fledged (yet simple) note taking app.
          </p>
        </div>
        <div className="column _col-2">
          <h2 className="column__head">Is it usable?</h2>
          <p className="column__p">
            Of course, i've put more or less 3 months of work on to this
            (I was learning 90% of the technologies i've used as i went
            so cut me some slack) thing so it would be a shame if it went
            unused.
          </p>
        </div>
        <div className="column _col-3">
          <h2 className="column__head">What did you use to create this?</h2>
          <p className="column__p">
            Let's pretend you actually asked this question so i can tell you
            the technologies i've used. They are:
          </p>
          <ul className="column-list">
            <li className="column-list__item">
              <a className="column-list__link" href="https://reactjs.org/" target="_blank" rel="noreferrer">React.JS</a>
                (Library for building the UI & its components).
            </li>
            <li className="column-list__item">
              <a className="column-list__link" href="https://firebase.google.com/products/firestore" target="_blank" rel="noreferrer">Firebase Firestore</a>
                (No SQL database).
            </li>
            <li className="column-list__item">
              <a className="column-list__link" href="https://firebase.google.com/products/auth" target="_blank" rel="noreferrer">Firebase Auth</a>
                (User authentification library).
            </li>
            <li className="column-list__item">
              <a className="column-list__link" href="https://redux.js.org/" target="_blank" rel="noreferrer">Redux</a>
                (State control library).
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}