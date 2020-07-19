import React from 'react';
import shnLogo from './images/logo1.png'
import './App.css';
import {ScrollBar} from './components/scrollBar/ScrollBar'

function App() {
  return (
    <div className="App">
      <header>
        <img src={shnLogo} alt='SHN'/>
      </header>
      <main>
        <ScrollBar/>
        <div className='details'>
          work title, page number, description
        </div>
        <div className='description'>
          <div>
            Image container
          </div>
          <div>
            side scroll
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
