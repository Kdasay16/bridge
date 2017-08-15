import React, { Component } from "react";
import logo from "../images/logo.svg";
import { StyleSheet, css } from "aphrodite"; // import aphrodite for inline css

class App extends Component {
  render() {
    return (
      <div className={css(styles.app)}>
        <div className={css(styles.appHeader)}>
          <img src={logo} className={css(styles.appLogo)} alt="logo" />
        </div>
        <div>
          <span className={css(styles.red)}>This is red.</span>
          <span className={css(styles.hover)}>This turns red on hover.</span>
          <span className={css(styles.small)}>
            This turns red when the browser is less than 600px width.
          </span>
          <span className={css(styles.red, styles.blue)}>This is blue.</span>
          <span className={css(styles.blue, styles.small)}>
            This is blue and turns red when the browser is less than 600px
            width.
          </span>
        </div>
      </div>
    );
  }
}

// animation keyframes
const spinLogoKeyFrames = {
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' }
}

// inline css styles
const styles = StyleSheet.create({
  red: {
    backgroundColor: "red"
  },

  blue: {
    backgroundColor: "blue"
  },

  hover: {
    ":hover": {
      backgroundColor: "red"
    }
  },

  small: {
    "@media (max-width: 600px)": {
      backgroundColor: "red"
    }
  },

  app: {
    textAlign: 'center'
  },
    
  appHeader: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white',
  },
  
  appLogo: {
    animationName: spinLogoKeyFrames,
    animationDuration: '20s',
    animationIterationCount: 'infinite',    
    height: '80px'
  }
});

export default App;

