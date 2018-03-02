import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { getStore, init as storeInit, registerReducer } from './redux/store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import bootstrapCSS from './theme/bootstrap.min.css';
import globalCSS from './theme/global.css';

const getInitiatedStore = () => {
  storeInit();
  registerReducer;
  return getStore();
};
const store = getInitiatedStore();

const getApp = store =>
  (<ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
  );

render(
  getApp(store),
  document.getElementById('root'),
);

registerServiceWorker();
