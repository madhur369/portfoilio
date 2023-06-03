import './App.css';
import React, { useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (

    <div className={`App ${theme}`}>
      <Home />
      <ThemeToggle theme={theme} onClick={toggleTheme} />
    </div>

  );
}

export default App;
