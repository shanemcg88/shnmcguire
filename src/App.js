import React from 'react';
import shnLogo from './images/logo1.png'
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { ScrollBar } from './components/scrollBar/ScrollBar'
import { WorkPage } from './components/sections/work/WorkPage'
import { About } from './components/sections/about/About'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <img src={shnLogo} alt='SHN'/>
        </header>
        <nav>
          <ScrollBar/>
        </nav>
        <main>
          <Switch>
            <Route exact path ='/' component={About}/>
            <Route path='/work' component={WorkPage}/>
          </Switch>
          <div className='sectionDetails'>
            <div>
              Image container
            </div>
            <div>
              side scroll
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
