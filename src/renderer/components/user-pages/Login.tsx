import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import ls from 'localstorage-slim';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { animateCSS } from '@renderer/components/animateCSS/animateCSS';
// import '../../components/Application.less';

import logo from "@assets/images/logo.svg";
import login_bg from '@assets/images/auth/login.jpg';


export class Login extends Component<any, any>  {
  private input_email: React.RefObject<HTMLInputElement>;
  private input_pwd: React.RefObject<HTMLInputElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      account: '',
      password: '',
      loading: false,
    }

    this.input_email = React.createRef();
    this.input_pwd = React.createRef();
  }

  forget = () => {
    toast.error('🦄 Wow so sorry!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return false;
  }

  login() {
    const account = this.state.account;
    const password = this.state.password;

    // let { account: string, password: string } = this.state;

    if (account === '') {
      animateCSS(this.input_email.current, 'tada')
      toast.warning('account/email not allow blank!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    if (password === '' || password.length < 4) {
      animateCSS(this.input_pwd.current, 'tada')
      toast.info('input your password, please!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return false;
    }

    const name = this.state.account.substr(0, this.state.account.indexOf('@'));
    let member;
    switch (name.toLowerCase()) {
      case 'smith':
        member = 'VIP Member';
        break;
      case 'asdf':
        member = 'Sliver Member'
        break;
      case 'admin':
        member = 'Super Star';
        break;
      default:
        member = 'Guest'
        break;
    }
    window.ME = { account, name, member, }

    // ls.set('ME', window.ME, { ttl: 60000 });
    // console.log(ls.get('ME'))

    this.props.history.push('/dashboard');

    return false;
  }
  render() {
    return (
      <div>
        <ToastContainer theme="colored" />
        <div className="d-flex align-items-center auth px-0" style={{ backgroundImage: `url(${login_bg})` }}>
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={logo} alt="logo" />
                </div>
                <h4>Hello! let&apos;s get started</h4>
                <Form className="pt-3" onSubmit={() => this.login()}>
                  <Form.Group className="d-flex search-field form-group">
                    <Form.Control ref={this.input_email} type="email" placeholder="Username" size="lg" className="h-auto" tabIndex={1}
                      maxLength={20} onChange={e => this.setState({ account: e.target.value })} value={this.state.account} />
                  </Form.Group>
                  <Form.Group className="d-flex search-field form-group">
                    <Form.Control ref={this.input_pwd} type="password" placeholder="Password" size="lg" className="h-auto" tabIndex={2}
                      maxLength={20} onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                  </Form.Group>

                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" tabIndex={4} />
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="#/!#" onClick={this.forget} className="auth-link text-muted" tabIndex={5}>Forgot password?</a>
                  </div>
                  <div className="mt-3">
                    <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" tabIndex={3}
                    >
                      SIGN IN
                    </button>
                  </div>
                  <div className="mb-2" style={{ display: 'none' }}>
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn"
                      onClick={() => this.login()}>
                      <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don&apos;t have an account? <Link to="/register" className="text-primary">Create</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
