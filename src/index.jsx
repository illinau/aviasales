import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import state from "./state/state";

ReactDOM.render(
  <Provider store={state}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
export default App;
