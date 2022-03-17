import React from 'react';

import classes from './Tabs.module.scss';

const Tabs = () => (
  <div className={classes.group}>
    <button className={classes.left} type="button">САМЫЙ ДЕШЕВЫЙ</button>
    <button type="button">САМЫЙ БЫСТРЫЙ</button>
    <button className={classes.right} type="button">ОПТИМАЛЬНЫЙ</button>
  </div>
);

export default Tabs;
