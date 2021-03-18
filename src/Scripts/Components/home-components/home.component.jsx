// FIREBASE 
import {auth} from '../../Firebase/Firebase.utils.js';
// COMPONENTS
import Header from './header/header.component.jsx';
import {Main} from './main/main.component.jsx';


export const Home = () => {
  return (
    <div className="home">
      <Header />
      <Main />
    </div>
  )
}