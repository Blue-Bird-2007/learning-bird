import React from 'react';

const aboutContainerStyle = {
    position: "absolute",
    top: 64,
    left: 16,
    height: 64,
}

export const About = () => (
  <div style={ aboutContainerStyle}>
    <h2>About Page</h2>
    <p>Send me an email at learningbird@gmail.com.</p>
  </div>
)