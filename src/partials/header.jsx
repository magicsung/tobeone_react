import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

class Header extends Component {
  render() {
    return (
      <header className="bg-primary-dark xs-fixed-header">
        <div className="container-fluid">
          <div className="row">

            <BrandImage/>
            <SearchBox/>
            <MobileHeader/>
            <MemberFeatures user={this.props.user}
                            handleLogoutClick={this.props.handleLogoutClick.bind(this)} />
          </div>
        </div>
      </header>
    );
  }
}

class BrandImage extends Component {
  render() {
    return (
      <div className="col-sm-4 col-xs-5 xs-pd-0 brand-logo ">
        <a href="/" className="ml-10 w100 block">
          <img src="/images/2be1_logo_white.svg" className="height-40" alt=""/>
        </a>
      </div>
    );
  }
}

class SearchBox extends Component {
  render() {
    return (
      <div className="col-sm-4 xs-pd-0 clearfix hidden-xs" id="search">
        <form action="index.html" method="post" className="hidden-xs">
          <div className="row">
            <div className="col-sm-12">
              <div className="group">
                <input type="text" name="search" value="" placeholder="請輸入關鍵字搜尋" className="form-control border-none pl-20 radius-20 height-40"/>
                <button className="inner-btn" type="submit">
                  <i className="material-icons color-gray-light mt-5">&#xE8B6;</i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

class MobileHeader extends Component {
  handleClick() {
    $('html').toggleClass("noscroll");
  }
  render() {
    return (
      <div className="display-xs-inline pull-right">
        <a href="#search" className="xs-search">
          <button className="btn btn-gray height-45 bg-opacity hover-none" type="button">
            <i className="material-icons color-white fz-2em">&#xE8B6;</i>
          </button>
        </a>
        <label id="xs-menu-action" htmlFor="toggle-menu" className="btn btn-gray height-45 bg-opacity hover-none" onClick={this.handleClick}>
          <i className="material-icons color-white fz-2em">&#xE5D2;</i>
        </label>
      </div>
    );
  }
}

class MemberFeatures extends Component {
  render() {
    let showNotice = false;
    let noticeNumber = this.props.user.currentUser.noticeNumber;
    if (noticeNumber > 0) { showNotice = true; }
    return (
      <div className="col-sm-4 clearfix hidden-xs">
        <ul className="inline-block link-white fz-1p1em lh-2em pull-right">
          <li className="ml-20">
            <a href="/upload">
              <i className="material-icons relative top-6px mr-5">&#xE2C3;</i>
              <span>上傳</span>
            </a>
          </li>
          <li className="ml-10 relative notice">
            <a href="#" className="dropdown-toggle">
              <i className="material-icons relative top-6px mr-5">&#xE7F5;</i>
              <span className="badge bg-white color-primary-dark icon-badge">{ showNotice ? noticeNumber : '' }</span>
              <span>通知</span>
            </a>
          </li>
          <li className="ml-10 relative login">
            <AuthState isAuthenticated={this.props.user.login.isAuthenticated}
                       handleLogoutClick={this.props.handleLogoutClick.bind(this)} />
          </li>
        </ul>
      </div>
    );
  }
}

class AuthState extends Component {
  render() {
    let isAuthenticated = this.props.isAuthenticated;
    if (!isAuthenticated) {
      return (
        <Link to='/user/login'>
          <i className="material-icons relative top-6px mr-5">&#xE7FD;</i>
          <span>登入</span>
        </Link>
      );
    } else {
      return (
        <a href="#"
           onClick={this.props.handleLogoutClick.bind(this)}>
          <i className="material-icons relative top-6px mr-5">&#xE7FD;</i>
          <span>登出</span>
        </a>
      );
    }
  }
}

export default Header;
