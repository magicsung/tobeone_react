import React, {Component} from 'react';
import { Link } from 'react-router';

class Register extends Component {
  constructor(props){
    super();
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handleNameChange(event) {
    this.setState({username: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleConfirmPasswordChange(event) {
    this.setState({confirmPassword: event.target.value});
  }
  handleRegisterSubmit(event) {
    event.preventDefault();
    let registerInfo = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    this.props.handleRegisterSubmit(registerInfo);
  }
  render() {
    let showErrorMessage = '';
    if (this.props.user.register.showError) {
      showErrorMessage = (
        <div className="text-center color-primary mb-15">{this.props.user.register.errorMessage}</div>
      )
    }
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-xs-12 xs-pd-lr-0 mt-50 xs-mt-0">
          <div className="text-center fz-3em color-white-opacity mt-35 xs-mt-25">會員註冊</div>
          <div className="bg-white radius-5 xs-radius-0 center-block pd-20 border mt-30 xs-mt-5 bg-image"
               style={{ backgroundImage: 'url(' + '/images/register-img.png' + ')' }} >
            <div className="table">
              <div className="table-cell item-2 xs-w100 mt-10 pd-20 xs-pd-0 ">
                { showErrorMessage }
                <form action=""
                      onSubmit={this.handleRegisterSubmit.bind(this)} >
                  <div className="form-group">
                    <input type="text"
                           name="email"
                           className="form-control border height-40"
                           placeholder="會員帳號"
                           value={this.state.email}
                           onChange={this.handleEmailChange.bind(this)}  />
                  </div>
                  <div className="form-group">
                    <input type="text"
                           name="nick-name"
                           className="form-control border height-40"
                           placeholder="會員暱稱"
                           value={this.state.username}
                           onChange={this.handleNameChange.bind(this)}  />
                  </div>
                  <div className="form-group">
                    <input type="password"
                           name="password"
                           className="form-control border height-40"
                           placeholder="設定密碼"
                           value={this.state.password}
                           onChange={this.handlePasswordChange.bind(this)}  />
                  </div>
                  <div className="form-group">
                    <input type="password"
                           name="confirm-password"
                           className="form-control border height-40"
                           placeholder="確認密碼"
                           value={this.state.confirmPassword}
                           onChange={this.handleConfirmPasswordChange.bind(this)}  />
                  </div>
                  <div className="form-group">
                    <p className="color-gray-light fz-p9em">
                      一旦點擊註冊，即表示你同意
                      <a href="/policies">會員服務條款</a>
                      內所有規範與權益。</p>
                  </div>
                  <div className="form-group mt-40">
                    <button type="submit"
                            className="btn btn-red height-40 w100 fz-1p1em fw-400"
                            disabled={this.props.user.register.isAuthenticating} >
                            會員註冊
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Register.propTypes = {
//
// }

export default Register;
