import React, { Component } from 'react';
// import { Trans } from 'react-i18next';
class Footer extends Component<any, any> {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="###" target="_blank" rel="noopener noreferrer">some.com </a>2020</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;