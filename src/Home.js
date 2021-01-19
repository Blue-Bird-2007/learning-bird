import React from 'react';

const homeContainerStyle = {
    position: "absolute",
    top: 64,
    left: 16,
    height: 64,
}

export const Home = (props) => (
  <div style={ homeContainerStyle }>
    <h2>Home Page</h2>
    <p>This is the home page.</p>
  </div>
)