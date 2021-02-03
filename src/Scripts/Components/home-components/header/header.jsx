import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a className="navbar__link navbar__logo" href="/">Notepp</a>
        <a className="navbar__link" href="/">About</a>
        <a className="navbar__link navbar__login" href="/">Sign in with Google</a>
      </nav>
    </header>
  )
}

export {Header};