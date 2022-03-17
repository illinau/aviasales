import React from 'react';

import Header from './components/header/Header';
import Filter from './components/filter/Filter';
import Tabs from './components/tabs/Tabs';
import Ticket from './components/ticket/Ticket';
import Footer from './components/footer/Footer';

import classes from './App.module.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={classes.sort}>
        <Filter />
        <div className={classes.list}>
          <Tabs />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
