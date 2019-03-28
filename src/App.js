import React, { Component, lazy, Suspense } from 'react';
import './css/tailwind.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';

const Dashboard = lazy(() => import('./containers/Dashboard'));
const FormIncome = lazy(() => import('./containers/FormIncome'));
const Thankyou = lazy(() => import('./containers/Thankyou'));

class App extends Component {
  render() {
    return (
      <div className="App font-sans min-h-screen bg-blue-gray-background">
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/konfirmasi-sumbangan" component={FormIncome} />
            <Route exact path="/terimakasih" component={Thankyou} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
