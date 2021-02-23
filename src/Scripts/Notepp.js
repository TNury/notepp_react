// REACT
import React from 'react';

// REACT-ROUTER COMPONENTS
import {Route, Switch} from 'react-router-dom';

// COMPONENTS
import {App} from './Components/app-components/app.jsx';
import {Home} from './Components/home-components/home.jsx';
import {About} from './Components/about-components/about.jsx';

// APP STYLES 
import '../Styles/css/normalizer.css';
import '../Styles/css/Notepp.css';

class Notepp extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact={true} path='/' component={Home}/>
          <Route exact={true} path='/app' component={App}/>
          <Route exact={true} path='/about' component={About}/>
        </Switch>
      </>
    );
  }
}

export {Notepp};
