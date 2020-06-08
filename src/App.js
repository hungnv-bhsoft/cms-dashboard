import React, { Suspense, lazy } from 'react';
import './App.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Products = lazy(() => import('./pages/Product'));
const Categories = lazy(() => import('./pages/Category'));

const App = () => (
  <Router>
    <DefaultLayout>
      <Suspense fallback={<div>Loading....</div>}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/category" component={Categories} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </DefaultLayout>
  </Router>
);

export default App;
