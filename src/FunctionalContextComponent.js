import React, { useContext } from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';

// Context in functional components is far easier and cleaner than class components
export default function FunctionalContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  // Pulling out the state context (bool) to access within the styles conditonally
  // Styles object which conditionally renders colors with ternary on the passed in (bool) state
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}
