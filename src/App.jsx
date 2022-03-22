import React from 'react';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import Filter from './components/filter/Filter';
import Tabs from './components/tabs/Tabs';
import Ticket from './components/ticket/Ticket';
import Footer from './components/footer/Footer';

import classes from './App.module.scss';

function App({ transfers }) {
  console.log(transfers)
  return (
    <div className="App">
      <Header />
      <div className={classes.sort}>
        <Filter />
        <div>
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

const mapStateToProps = (state) => {
  return {
    transfers: state.transfers,
    filters: state.filters,
  }
}

export default connect(mapStateToProps)(App);
