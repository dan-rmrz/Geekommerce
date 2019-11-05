import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import NotFoud from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFoud} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;