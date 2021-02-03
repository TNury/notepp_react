// ROUTER
import {Route} from 'react-router-dom';
// COMPONENTS
import {App} from './Components/app-components/app.jsx';
import {Home} from './Components/home-components/home.jsx';

// NORMALIZER STYLES 
import '../Styles/css/normalizer.css';
import '../Styles/css/Notepp.css';


function Notepp() {
  return (
    <div>
      <App />
    </div>
  );
}

export {Notepp};
