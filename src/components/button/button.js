import React from 'react';
import './button.sass';

const Button = () => {
  return (
    <button
      className="btn"
      type="button"
      onClick={() => console.log('Hello!')}
    >
      Say hello
    </button>
  );
};

export default Button;
