import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from './store';

import Home from './components/Home';

import './assets/standard.css'
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from './components/AboutUs';


const App: React.FC = () => {
  return (
    <>
    <Provider store={store}>
      <Home />
      <AboutUs />
      <ToastContainer />
    </Provider>
    </>
  );
}

export default App;