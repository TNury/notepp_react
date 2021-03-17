import React from 'react';


// COMPONENTS
import {Sidebar} from './sidebar/sidebar.component.jsx';
import {Notes} from './notes/notes.component.jsx';
import {Note} from './note/note.component.jsx';


class App extends React.Component {
  constructor({currentUser}) {
    super();  
    this.state = {
      user: currentUser,
      displayComponent: false
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="Wrap">
          <Notes title='Hello, World!' body='Lorem Ipsum' user={this.state.user}/>
          <Note title='Hello, World!' body='Lorem Ipsum' display={this.state.displayComponent}/>
        </div>
      </div>
    )
  }
  
}

export {App};
