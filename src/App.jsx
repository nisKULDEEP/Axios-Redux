// App.js
import React from 'react';
import { Provider } from 'react-redux';
// import store from './redux/store';
import YourComponent from './components/YourComponent';
import store from './api/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <YourComponent />
      </div>
    </Provider>
  );
}

export default App;
