import React from 'react';
import Logo from '../../assets/icons/logo.svg';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero_content">
        <h1>Bishkek Express inc</h1>
        <h2>
          {' '}
          <span>BE</span> WITH US
        </h2>
        <img src={Logo} alt="logo" />
      </div>
    </section>
  );
};

export default Hero;
