import { Provider } from 'react-redux';
import store from './store';

import AboutUs from './components/AboutUS';
import Home from './components/Home';

import './assets/standard.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
        <AboutUs />
      </Provider>
    </>
  );
}

export default App;
