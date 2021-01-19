import React from 'react';

const physicsContainerStyle = {
    position: "absolute",
    top: 64,
    left: 16,
    height: 64,
}

export const Physics = () => (
  <div style={ physicsContainerStyle}>
    <h2>Physics Page</h2>
    <p>Let's talk physics!</p>
  </div>
)