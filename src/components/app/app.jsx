import React from 'react';
import './app.scss';
import image from './test_image.jpg';

const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <img src={image} alt="image" width="500" height="350" />
    </div>
  );
};

export default App;
