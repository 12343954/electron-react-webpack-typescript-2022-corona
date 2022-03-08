import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '@components/shared/Spinner';

const Dashboard = lazy(() => import('@components/dashboard/Dashboard'));
const Buttons = lazy(() => import('@components/basic-ui/Buttons'));
const Dropdowns = lazy(() => import('@components/basic-ui/Dropdowns'));
const Typography = lazy(() => import('@components/basic-ui/Typography'));
const BasicElements = lazy(() => import('@components/form-elements/BasicElements'));
const BasicTable = lazy(() => import('@components/tables/BasicTable'));
const Mdi = lazy(() => import('@components/icons/Mdi'));
const ChartJs = lazy(() => import('@components/charts/ChartJs'));
const Error404 = lazy(() => import('@components/error-pages/Error404'));
const Error500 = lazy(() => import('@components/error-pages/Error500'));
const Login = lazy(() => import('@components/user-pages/Login'));
const Register1 = lazy(() => import('@components/user-pages/Register'));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/basic-ui/buttons" component={Buttons} />
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route path="/basic-ui/typography" component={Typography} />
          <Route path="/form-Elements/basic-elements" component={BasicElements} />
          <Route path="/tables/basic-table" component={BasicTable} />
          <Route path="/icons/mdi" component={Mdi} />
          <Route path="/charts/chart-js" component={ChartJs} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register1} />
          <Route path="/error/404" component={Error404} />
          <Route path="/error/500" component={Error500} />
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;