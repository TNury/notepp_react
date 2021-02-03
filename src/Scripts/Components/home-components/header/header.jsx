import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="home-navbar">
        <a className="home-navbar__link home-navbar__logo" href="/">Notepp</a>
        <a className="home-navbar__link" href="/">About</a>
        <a className="home-navbar__link home-navbar__login" href="/">Sign in with Google</a>
      </nav>
    </header>
  )
}

export {Header};