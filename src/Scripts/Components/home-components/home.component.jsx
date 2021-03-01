// FIREBASE 
import {auth} from '../../Firebase/Firebase.utils.js';
// COMPONENTS
import {Header} from './header/header.component.jsx';
import {Main} from './main/main.component.jsx';


function Home({currentUser}) {
  return (
    <div className="home">
      <Header currentUser={currentUser}/>
      <Main />
    </div>
  )
}

export {Home};