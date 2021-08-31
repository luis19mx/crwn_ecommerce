import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App';

import './index.css';

ReactDOM.render(
  <StrictMode>
    <Provider {...{ store }}>
      <PersistGate loading={null} {...{ persistor }}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
