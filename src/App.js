import React, { Component } from 'react';

import { Provider } from 'react-redux'
import store from './redux/store'

import MainPage from './containers/MainPage/MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          {/* <Login /> */}
          <MainPage />
        </Provider>
      </div>
    );
  }
}

export default App;