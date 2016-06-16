import React, {Component}     from 'react';
import { Link }               from 'react-router';
import { connect }            from 'react-redux';
import { userLogin }          from '../actions/userLoginActions';

class AuthLayout extends Component {
  handleLoginSubmit(loginInfo) {
    const { dispatch } = this.props;
    dispatch(userLogin(loginInfo));
  }
  render(){
    return (
      <div className="h100">
        <div id="main-content">
          <input type="checkbox" className="hidden" id="toggle-menu" defaultChecked />
          <Header />
          <div className="banner w100 absolute z-1">
            <img src="/images/login-banner.png" alt="" className="w100" />
          </div>
          <div className="container-fluid mt-15 mb-15 header-height">
            {this.props.children && React.cloneElement(this.props.children, {
             user: this.props.user,
             handleLoginSubmit: this.handleLoginSubmit.bind(this)
            })}
            <div className="text-center">
              <p className="color-gray-light">© 2016. All rights reserved. ToBeOne Co.,Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render(){
    return (
      <header className="bg-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-xs-12 xs-pd-lr-5 brand-logo ">
              <div className="ml-10 w100">
                <Link to='/'>
                  <img src="/images/2be1_Logo.svg" className="height-45" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(AuthLayout);
