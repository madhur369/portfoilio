import React from 'react';
import sunIcon from '../images/sun.png';
import moonIcon from '../images/moon.png';
import Roll from 'react-reveal/Roll';
function ThemeToggle({ theme, onClick }) {
  const icon = theme === 'dark' ? sunIcon : moonIcon;

  return (
    <Roll top>
      <button className="theme-toggle" onClick={onClick}>
        <img src={icon} alt='icon' className="theme-toggle-icon" />
      </button>
    </Roll>

  );
}

export default ThemeToggle;

