import React, { Component } from 'react';
import './css/tailwind.css';
import Header from './components/Header';
// import FormIncome from './containers/FormIncome';
// import Thankyou from './containers/Thankyou';
import Dashboard from './containers/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App font-sans min-h-screen bg-blue-gray-background">
        <Header />
        <Dashboard />

        {/* <div className="py-8"> */}
        {/* <Thankyou /> */}
        {/* <FormIncome /> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;
