import React from 'react';
import PropTypes from 'prop-types';
import webpackLogo from 'assets/img/webpack.svg';
import babelLogo from 'assets/img/babel.svg';
import reactLogo from 'assets/img/react.svg';
import eslintLogo from 'assets/img/eslint.svg';
import './logo-card.scss';

const TYPES = {
  webpack: { name: 'Webpack', src: webpackLogo, doSpin: false },
  babel: { name: 'Babel', src: babelLogo, doSpin: false },
  react: { name: 'React', src: reactLogo, doSpin: true },
  eslint: { name: 'Eslint', src: eslintLogo, doSpin: false },
};

const LogoCard = ({ type }) => {
  return (
    <div className="logo__card">
      <img
        className={`logo__img ${TYPES[type].doSpin ? 'logo__img--spin' : ''}`}
        src={TYPES[type].src}
        width="80px"
        height="80px"
        alt={`${TYPES[type].name} logo`}
      />
      <h3 className="logo__title">{TYPES[type].name}</h3>
    </div>
  );
};

LogoCard.propTypes = {
  type: PropTypes.string.isRequired
};

export default LogoCard;
