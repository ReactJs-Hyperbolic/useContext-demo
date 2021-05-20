import React, { useState, useContext } from 'react';
import ClassContextComponent from './ClassContextComponent';
import FunctionalContextComponent from './FunctionalContextComponent';

export const ThemeContext = React.createContext();

export default function App() {
  // Boolean state to toggle between themes
  const [darkTheme, setDarkTheme] = useState(true);

  // function to change bool state onClick
  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    // Wrapper for all the children & grandchildren+ which get access to the context
    // sending in a prop called 'value' containing the context value (bool in this case).
    // Global state for all children of the Provider
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionalContextComponent />
      <ClassContextComponent />
    </ThemeContext.Provider>
  );
}
