import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function showNotification() {
    new window.fin.desktop.Notification({
      url: 'notification.html',
      timeout: 5000,
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={showNotification}>Notify</button>
      </header>
    </div>
  );
}

export default App;
