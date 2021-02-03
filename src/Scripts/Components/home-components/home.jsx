import React from 'react';

// COMPONENTS
import {Header} from './header/header.jsx';
import {Main} from './main/main.jsx';

// STYLES
import '../../../Styles/css/home.css';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Main />
    </div>
  )
}

export {Home};