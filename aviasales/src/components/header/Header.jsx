import React from 'react';
import Logo from '../../img/Logo.png';

import classes from './header.module.scss';

const Header = () => (
  <div className={classes.logo}>
    <img src={Logo} alt="AviasalesLogo" />
  </div>
);

export default Header;
