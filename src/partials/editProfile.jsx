import React, {Component} from 'react';
import { Link } from 'react-router';

class EditProfile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isPasswordConfirm: true,
      newPassword: '',
      newPasswordConfirm: ''
    };
  };
  componentDidMount() {
    this.props.handleFetchUserProfile(this.props.user.currentUser.token);
  }
  handleAvatarChange(event) {
    // call avatar upload api
    console.log('avatar upload!');
  }
  handleEditProfileSubmit(event) {
    event.preventDefault();
    let profiles = this.props.user.profile;
    this.setState({newPassword: '', newPasswordConfirm: ''});
    if (this.state.isPasswordConfirm) {
      this.props.handleEditProfileSubmit({
        token: this.props.user.currentUser.token,
        profile: {
          email: profiles.email,
          username: profiles.username,
          description: profiles.description,
          mobile: profiles.mobile,
          password: this.state.newPassword
        }
      });
    }
  }
  handleNewPasswordChange(event) {
    this.setState({newPassword: event.target.value});
    this.setState({
      isPasswordConfirm: event.target.value === this.state.newPasswordConfirm ? true : false
    });
  }
  handlePasswordConfirmChange(event) {
    this.setState({newPasswordConfirm: event.target.value});
    this.setState({
      isPasswordConfirm: event.target.value === this.state.newPassword ? true : false
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user.profile.showMessage) {
      window.setTimeout(() => {
        this.props.cleanProfileErrorMessage();
      }, 3500);
    }
  }

  render() {
    let showMessage;
    this.props.user.profile.showMessage ? showMessage = <p className="color-primary fadeOut animated-2s-delay-2s">{this.props.user.profile.showMessage}</p> : showMessage = '';
    return (
      <div className="col-sm-8 col-md-9 xs-pd-0">
        <div className="content bg-white radius-5 xs-radius-0">
          <div className="border-bottom-gray-1px pd-20 xs-pd-10">
            <div className="title fz-1p6em xs-ml-5">
              <i className="material-icons relative top-6px fz-1p3em">&#xE7FD;</i>
              <span>個人資料</span>
            </div>
            <div className="border-bottom-gray-1px mt-15"></div>
            <form onSubmit={this.handleEditProfileSubmit.bind(this)} >
              <div className="edit-profile pd-15 clearfix">
                <div className="table-cell pull-left mr-15 xs-w100 text-center thumbnail edit-avatar relative">
                  <img src={this.props.user.currentUser.avatar} alt="" className="thumbnail" />
                  <label htmlFor="new-avatar" className="pointer hover">編輯</label>
                </div>
                <input type="file"
                       id="new-avatar"
                       className="hidden"
                       onChange={this.handleAvatarChange.bind(this)} />
                <ProfileForm user={this.props.user}
                             isPasswordConfirm={this.state.isPasswordConfirm}
                             newPassword={this.state.newPassword}
                             newPasswordConfirm={this.state.newPasswordConfirm}
                             handleUsernameChange={this.props.handleUsernameChange.bind(this)}
                             handleDescriptionChange={this.props.handleDescriptionChange.bind(this)}
                             handleMobileChange={this.props.handleMobileChange.bind(this)}
                             handleNewPasswordChange={this.handleNewPasswordChange.bind(this)}
                             handlePasswordConfirmChange={this.handlePasswordConfirmChange.bind(this)} />
              </div>
              <div className="button w100 text-center mt-40">
                {showMessage}
                <Link to="/" className="btn btn-white width-200 height-40 lh-2em mr-15 xs-w40">取消</Link>
                <input type="submit"
                       className="btn btn-red width-200 height-40 lh-2em xs-w40"
                       value="儲存修改"
                       disabled={this.props.user.profile.isUpdating} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

class ProfileForm extends Component {
  render() {
    let socialMediaList = [
      {labelName: 'Facebook', inputId: 'account-fb'},
      {labelName: 'Google+', inputId: 'account-google'},
      {labelName: 'WeChat', inputId: 'account-wechat'},
      {labelName: 'QQ', inputId: 'account-qq'},
      {labelName: '微博', inputId: 'account-weibo'},
      {labelName: '台灣禮品館', inputId: 'account-taiwangoods'}
    ];
    let accountSwitch = socialMediaList.map((socaial, index) => {
      return <AccountSwitch key={index} labelName={socaial.labelName} inputId={socaial.inputId} />;
    });
    return (
      <div className="profile table-cell pull-left w100-115 xs-w100 xs-mt-15">
        <div className="w100">
          <div className="lh-2em">
            <div className="mb-5 mt-15 fw-700 inline-block">帳號</div>
            <div className="ml-15 inline-block">{this.props.user.profile.email}</div>
          </div>
          <div className="lh-2em">
            <div className="mb-5 mt-15 fw-700">已連結帳號</div>
            <div className="mt-5">
              <div className="table mb-0">
                {accountSwitch}
              </div>
            </div>
          </div>
          <div className="lh-2em">
            <label htmlFor="nickname" className="mb-5 mt-15 fw-700">會員暱稱</label>
            <div className="mt-5">
              <input type="text"
                     id="nickname"
                     className="form-control border-none bg-light radius-5"
                     placeholder="請輸入會員暱稱..."
                     value={this.props.user.profile.username}
                     onChange={this.props.handleUsernameChange.bind(this)} />
            </div>
          </div>
          <div className="lh-2em">
            <label htmlFor="person-info" className="mb-5 mt-15 fw-700">個人簡介</label>
            <div className="mt-5">
              <textarea rows="6" cols="40"
                        id="person-info"
                        placeholder="請輸入個人簡介內容..."
                        className="form-control border-none bg-light radius-5"
                        value={this.props.user.profile.description}
                        onChange={this.props.handleDescriptionChange.bind(this)} >
              </textarea>
            </div>
          </div>
          <div className="lh-2em">
            <label htmlFor="mobile-phone" className="mb-5 mt-15 fw-700">行動電話</label>
            <div className="mt-5">
              <input type="tel"
                     id="mobile-phone"
                     className="form-control border-none bg-light radius-5"
                     placeholder="請輸入行動電話..."
                     value={this.props.user.profile.mobile}
                     onChange={this.props.handleMobileChange.bind(this)} />
            </div>
          </div>
          {/*
            <div className="lh-2em clearfix">
              <label className="mb-5 mt-15 fw-700">居住地區</label>
              <div className="mt-5">
                <div className="relative w50 pull-left pr-5">
                  <select className="form-control border-none bg-light radius-5" name="city" id="city">
                    <option value="c1">台北市</option>
                    <option value="c2">新北市</option>
                  </select>
                  <label htmlFor="video-privacy" className="material-icons inner-btn" style={{right: '10px', top: '5px'}}>&#xE313;</label>
                </div>
                <div className="relative w50 pull-left">
                  <select className="form-control border-none bg-light radius-5" name="district" id="district">
                    <option value="d1">大安區</option>
                    <option value="d2">信義區</option>
                  </select>
                  <label htmlFor="video-privacy" className="material-icons inner-btn" style={{right: '10px', top: '5px'}}>&#xE313;</label>
                </div>
              </div>
            </div>
          */}
          <div className="lh-2em">
            <label htmlFor="password" className="mb-5 mt-15 fw-700">修改密碼
              <span className="fw-400 ml-15 fz-p9em">請輸入兩次相同的密碼</span>
              <span className="fw-400 ml-15 fz-p9em">不修改密碼請留空</span>
            </label>
            <div className="mt-5">
              <input type="password"
                     placeholder="輸入新密碼"
                     id="new-password"
                     className="form-control border-none bg-light radius-5"
                     value={this.props.newPassword}
                     onChange={this.props.handleNewPasswordChange.bind(this)} />
            </div>
            <div className={this.props.isPasswordConfirm ? "mt-5" : "mt-5 input-error"}>
              <input type="password"
                     placeholder="請再次確認密碼"
                     id="confirm-password"
                     className="form-control border-none bg-light radius-5"
                     value={this.props.newPasswordConfirm}
                     onChange={this.props.handlePasswordConfirmChange.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class AccountSwitch extends Component {
  render() {
    return (
      <div className="inline-block item-3 xs-item-2 pr-10 clearfix mb-10">
        <div className="onoffswitch switch-small inline-block relativ pull-left mr-5 top-5px">
          <input type="checkbox" name={this.props.inputId} className="onoffswitch-checkbox" id={this.props.inputId} />
          <label className="onoffswitch-label" htmlFor={this.props.inputId}>
            <span className="onoffswitch-inner"></span>
            <span className="onoffswitch-switch"></span>
          </label>
        </div>
        <label htmlFor={this.props.inputId} className="inline-block pull-left">{this.props.labelName}</label>
      </div>
    );
  }
}

export default EditProfile;
