import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './assets/standard.css'
import 'react-toastify/dist/ReactToastify.css';

import store from './store';
import Home from './components/Home';
import AboutUS from './components/AboutUS';


const App: React.FC = () => {
  return (
    <>
    <Provider store={store}>
      <Home />
      <AboutUS />
      <ToastContainer />
    </Provider>
    </>
  );
}

export default App;