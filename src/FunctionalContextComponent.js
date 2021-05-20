import React, { useContext } from 'react';
import { ThemeContext } from './App';

// Context in functional components is far easier and cleaner than class components
export default function FunctionalContextComponent() {
  // Pulling out the state context (bool) to access within the styles conditonally
  const darkTheme = useContext(ThemeContext);
  // Styles object which conditionally renders colors with ternary on the passed in (bool) state
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return <div style={themeStyles}>Function Theme</div>;
}
