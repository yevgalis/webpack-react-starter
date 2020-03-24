import React from 'react';
import './app.scss';
import webpack from '../../../public/img/webpack.svg';
import babel from '../../../public/img/babel.svg';
import react from '../../../public/img/react.svg';
import eslint from '../../../public/img/eslint.svg';

const App = () => {
  return (
    <div className="container">
      <h1 className="app-title">Webpack React Starter Template</h1>
      <div className="logos">
        <div className="logo-card">
          <img
            className="logo-img"
            src={webpack}
            width="80px"
            height="80px"
            alt="webpack logo"
          />
          <h3 className="logo-title">Webpack</h3>
        </div>
        <div className="logo-card">
          <img
            className="logo-img"
            src={babel}
            width="80px"
            height="80px"
            alt="babel logo"
          />
          <h3 className="logo-title">Babel</h3>
        </div>
        <div className="logo-card">
          <img
            className="logo-img logo-img-spin"
            src={react}
            width="80px"
            height="80px"
            alt="react logo"
          />
          <h3 className="logo-title">React</h3>
        </div>
        <div className="logo-card">
          <img
            className="logo-img"
            src={eslint}
            width="80px"
            height="80px"
            alt="eslint logo"
          />
          <h3 className="logo-title">Eslint</h3>
        </div>
      </div>
      <p className="app-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo repudiandae vitae sequi deleniti vero corporis sint, asperiores quibusdam consectetur, praesentium maxime at nisi dolores officia optio nesciunt tenetur deserunt. Doloremque quia temporibus natus doloribus quis saepe consequuntur aut provident! Atque, quam. Autem maxime repellat, voluptas culpa aspernatur sed et corrupti doloribus hic, facilis dicta id rem perspiciatis consequuntur nihil magni qui magnam debitis earum? Dolore repellendus molestias quis porro laboriosam. Repellendus quis, ab suscipit esse velit eligendi quo perspiciatis eveniet saepe placeat atque eaque deleniti vel odio est, adipisci blanditiis modi nemo corrupti nihil amet, ut facilis earum repudiandae?</p>
    </div>
  );
};

export default App;
