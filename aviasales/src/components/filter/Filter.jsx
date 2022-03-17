import React from 'react';

import classes from './Filter.module.scss';

const Filter = () => (
  <div className={classes.style}>
    <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
    <label htmlFor="firstName">
      <input type="checkbox" />
      <span>Все</span>
    </label>
    <label htmlFor="firstName">
      <input type="checkbox" />
      <span>Без пересадок</span>
    </label>
    <label htmlFor="firstName">
      <input type="checkbox" />
      <span>1 пересадка</span>
    </label>
    <label htmlFor="firstName">
      <input type="checkbox" />
      <span>2 пересадки</span>
    </label>
    <label htmlFor="firstName">
      <input type="checkbox" />
      <span>3 пересадки</span>
    </label>
  </div>
);

export default Filter;
