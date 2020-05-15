import React from 'react';
import Games from './components/Games';
import Drawer from './components/Drawer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Drawer />
      <Games />
    </div>
  );
}

export default App;
