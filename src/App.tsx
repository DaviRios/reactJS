import React from 'react';
import Navbar from './Navbar';

import Start from './sections/Start';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main id="main-doc">
        <Start />
      </main>
    </div>
  );
}

export default App;
