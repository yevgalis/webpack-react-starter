import React from 'react';
import Content from '../content/content.jsx';
import Button from 'components/button/button';
import image from './test_image.jpg';
import './app.scss';

const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <img src={image} alt="image" width="500" height="350" />
      <Content name='John Doe' />
      <Button />
    </div>
  );
};

export default App;
