import { App } from './app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
