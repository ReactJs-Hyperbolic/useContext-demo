import React, { Component } from 'react';
import { ThemeContext } from './App';

export default class ClassContextComponent extends Component {
  // Function to return style set
  // accepts argument (bool in this case) to conditionally return specific values
  themeStyles(dark) {
    return {
      // If dark is true, set backgroundColor to dark and font color to light
      backgroundColor: dark ? '#333' : '#CCC',
      color: dark ? '#CCC' : '#333',
      padding: '2rem',
      margin: '2rem',
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {darkTheme => {
          // invoke this.themeStyles which is a function that returns a style object value based on the (bool) argument (darkTheme) passed in
          return <div style={this.themeStyles(darkTheme)}>Class Theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
