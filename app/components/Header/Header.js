import React from 'react';
import './style.scss';

const Header = (props) => {
  return (
    <header className="top">
      <h1 className="red">I recommend App</h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}

export default Header;