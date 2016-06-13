import React, {Component} from 'react';
import $ from 'jquery';
import SideBar from '../partials/sidebar.jsx';
import Wall from '../partials/wall.jsx';

class Login extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-xs-12 xs-pd-lr-0 mt-50 xs-mt-0">

          <div className="text-center fz-3em color-white-opacity mt-35 xs-mt-25">會員登入</div>

          <div className="bg-white radius-5 xs-radius-0 center-block pd-20 border mt-30 xs-mt-5">

            <div className="table">
              <SocialLogin />
              <LoginForm/>
            </div>

            <div className="text-center mt-35">
              <a href="/register" className="hover-red">會員註冊</a> ｜ <a href="/forgot-pwd" className="hover-red">忘記密碼</a>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

class SocialLogin extends Component {
  render() {
    return (
      <div className="table-cell item-2 xs-w100 mt-10 pd-20 xs-pd-0 ">
        <div className="text-center fz-1p2em">社群帳號登入</div>
        <div className="social-login relative table clearfix">
          <div className="item-2 pd-lr-10 mt-15">
            <button className="btn btn-fb radius-5 fz-1p2em height-45 w100">
              <i className="fa fa-facebook fz-1p3em pull-left" aria-hidden="true"></i>
              Facebook
            </button>
          </div>
          <div className="item-2 pd-lr-10 mt-15">
            <button className="btn btn-weibo radius-5 fz-1p2em height-45 w100">
              <i className="fa fa-weibo fz-1p3em pull-left" aria-hidden="true"></i>
              微博
            </button>
          </div>
          <div className="item-2 pd-lr-10 mt-15">
            <button className="btn btn-google radius-5 fz-1p2em height-45 w100">
              <i className="fa fa-google-plus fz-1p3em pull-left" aria-hidden="true"></i>
              Google+
            </button>
          </div>
          <div className="item-2 pd-lr-10 mt-15">
            <button className="btn btn-wechat radius-5 fz-1p2em height-45 w100">
              <i className="fa fa-wechat fz-1p3em pull-left" aria-hidden="true"></i>
              Wechat
            </button>
          </div>
          <div className="item-2 pd-lr-10 mt-15">
            <button className="btn btn-qq radius-5 fz-1p2em height-45 w100">
              <i className="fa fa-qq fz-1p3em pull-left" aria-hidden="true"></i>
              QQ
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class LoginForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      url: 'http://localhost:3000/api_v1/users/login',
      email: "jacksung@gmail.com",
      password: "1234"
    };
  };

  handleLoginSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      type: 'POST',
      data: {
        email: this.state.email,
        password: this.state.password
      },
      success: function(data) {
        console.log({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="table-cell item-2 xs-w100 pd-30 xs-pd-0 border-left-gray-1px xs-border-none">
        <div className="text-center fz-1p2em">達人網帳號登入</div>
        <form action="" onSubmit={this.handleLoginSubmit.bind(this)} className="mt-15">
          <div className="form-group">
            <input type="text"
                   name="email"
                   className="form-control border height-40"
                   placeholder="電子郵件"
                   value={this.state.email}
                   onChange={this.handleEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <input type="password"
                   name="password"
                   className="form-control border height-40"
                   placeholder="密碼"
                   value={this.state.password}
                   onChange={this.handlePasswordChange.bind(this)} />
          </div>
          <div className="form-group">
            <button type="submit"
                    className="btn btn-red height-40 w100 fz-1p1em fw-400">
                    會員登入
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
