import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '@renderer/App.scss';
import 'animate.css';
import AppRoutes from '@renderer/AppRoutes';
import PublicRoutes from '@renderer/PublicRoutes';
import Navbar from '@renderer/components/shared/Navbar';
import Sidebar from '@renderer/components/shared/Sidebar';
import Footer from '@renderer/components/shared/Footer';
import { withTranslation } from "react-i18next";
import ls from 'localstorage-slim';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      ME: {}
    }
  }

  login() { return false; }
  logout() {
    ls.remove('token')
  }

  setToken(token: string) {
    this.setState({ token: token })
    ls.set('token', token);
  }

  getToken() {
    if (this.state.token) return this.state.token;
    else if (!ls.get('token')) {
      return false;
    }
  }

  shouldComponentUpdate() {
    const ME = ls.get('ME');
    if (ME) {
      if (!window.ME)
        window.ME = ME;

      if (!this.state.ME)
        this.setState({ ME: ME });
    }

    return true;
  }

  componentDidMount() {
    this.onRouteChanged();
  }

  render() {
    if (this.state.ME == {}) {
      return (
        <div className="container-fluid page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <PublicRoutes />
            </div>
          </div>
        </div>
      );
    } else {
      const navbarComponent = !this.state.isFullPageLayout ? <Navbar /> : '';
      const sidebarComponent = !this.state.isFullPageLayout ? <Sidebar /> : '';
      const footerComponent = !this.state.isFullPageLayout ? <Footer /> : '';
      return (
        <div className="container-scroller">
          {sidebarComponent}
          <div className="container-fluid page-body-wrapper">
            {navbarComponent}
            <div className="main-panel">
              <div className="content-wrapper">
                <AppRoutes />
              </div>
              {footerComponent}
            </div>
          </div>
        </div>
      );
    }
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED", this.props.location.pathname);
    // const { i18n } = this.props;
    // const body = document.querySelector('body');
    // if (this.props.location.pathname === '/layout/RtlLayout') {
    //   body.classList.add('rtl');
    //   i18n.changeLanguage('ar');
    // }
    // else {
    //   body.classList.remove('rtl')
    //   i18n.changeLanguage('en');
    // }
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/login', '/register', '/user/login-1', '/user/login-2', '/user/register-1', '/user/register-2', '/user/lockscreen', '/error/404', '/error/500', '/general-pages/landing-page'];
    for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({ isFullPageLayout: true })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        this.setState({ isFullPageLayout: false })
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }

}

export default withTranslation()(withRouter(App));
