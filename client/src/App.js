import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Register from './components/Register/Register';
import NotFound from './components/NotFound';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand m-auto text-uppercase">Paytm Demo</Link>
        </nav>
        <div className="container">
          <div className="row">
            <Switch>
              <Route exact path="/" component={ Register } />
              <Route path="*" component={ NotFound } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
