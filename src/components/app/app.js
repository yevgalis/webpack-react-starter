import React from 'react';
import './app.scss';
import webpackLogo from 'assets/img/webpack.svg';
import babelLogo from 'assets/img/babel.svg';
import reactLogo from 'assets/img/react.svg';
import eslintLogo from 'assets/img/eslint.svg';

const App = () => {
  return (
    <div className="container">
      <h1 className="app-title">Webpack React&nbsp;Starter Template</h1>
      <div className="logo-cards-wrapper">
        <div className="logo__card">
          <img
            className="logo__img"
            src={webpackLogo}
            width="80px"
            height="80px"
            alt="webpack logo"
          />
          <h3 className="logo__title">Webpack</h3>
        </div>
        <div className="logo__card">
          <img
            className="logo__img"
            src={babelLogo}
            width="80px"
            height="80px"
            alt="babel logo"
          />
          <h3 className="logo__title">Babel</h3>
        </div>
        <div className="logo__card">
          <img
            className="logo__img logo__img--spin"
            src={reactLogo}
            width="80px"
            height="80px"
            alt="react logo"
          />
          <h3 className="logo__title">React</h3>
        </div>
        <div className="logo__card">
          <img
            className="logo__img"
            src={eslintLogo}
            width="80px"
            height="80px"
            alt="eslint logo"
          />
          <h3 className="logo__title">Eslint</h3>
        </div>
      </div>
      <p className="app-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem illo repudiandae vitae sequi deleniti vero corporis sint, asperiores quibusdam consectetur, praesentium maxime at nisi dolores officia optio nesciunt tenetur deserunt. Doloremque quia temporibus natus doloribus quis saepe consequuntur aut provident! Atque, quam. Autem maxime repellat, voluptas culpa aspernatur sed et corrupti doloribus hic, facilis dicta id rem perspiciatis consequuntur nihil magni qui magnam debitis earum? Dolore repellendus molestias quis porro laboriosam. Repellendus quis, ab suscipit esse velit eligendi quo perspiciatis eveniet saepe placeat atque eaque deleniti vel odio est, adipisci blanditiis modi nemo corrupti nihil amet, ut facilis earum repudiandae?</p>
    </div>
  );
};

export default App;
