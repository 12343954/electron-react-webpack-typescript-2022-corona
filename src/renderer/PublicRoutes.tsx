import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '@renderer/components/shared/Spinner';

const Error404 = lazy(() => import('@renderer/components/error-pages/Error404'));
const Error500 = lazy(() => import('@renderer/components/error-pages/Error500'));
const Login = lazy(() => import('@renderer/components/user-pages/Login'));
const Register1 = lazy(() => import('@renderer/components/user-pages/Register'));
const Index = lazy(() => import('@renderer/components/Application'));


class PublicRoutes extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  componentDidMount(): void {
    alert("PublicRoutes")
  }

  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register1} />
          <Route path="/error/404" component={Error404} />
          <Route path="/error/500" component={Error500} />
          <Redirect to="/login" />
        </Switch>
      </Suspense>
    );
  }
}

export default PublicRoutes;