import React, {Component} from 'react';
import { Link } from 'react-router';

class SideBar extends Component {
  render() {
    let sidebarClass = "col-sm-4 col-md-3 xs-pd-0 xs-pb-45 ";
    if (this.props.isSidebarHidden) sidebarClass += "display-xs-block";
    return (
      <div id="sidebar" className={sidebarClass} >
        <div className="bg-white pd-40 radius-5 xs-radius-0  xs-mb-45 sidebar-wrap">
          <SideBarAvatar user={this.props.user} />
          <PersonalFunction noticeNumber={this.props.user.currentUser.noticeNumber} />
          <CategoryButton />
        </div>
      </div>
    );
  }
}
class PersonalFunction extends Component {
  render() {
    return (
      <div className="personal-function mt-20">
        <ul className="link-red ml-30 xs-list">
          <li className="display-xs-block bg-light">
            <a href="#" className="mt-5">
              個人專區
            </a>
          </li>
          <li className="display-xs-block">
            <Link to="/profile" className="mt-5">
              <span>編輯個人資料</span>
            </Link>
          </li>
          <li className="display-xs-block notice">
            <a href="#" className="mt-5">
              <span>通知</span>
              <span className="badge bg-primary-dark pull-right">{this.props.noticeNumber}</span>
            </a>
          </li>
          <li>
            <a href="#" className="mt-5">
              <i className="material-icons relative top-7px mr-5 hidden-xs">&#xE307;</i>
              <span>我的訂閱</span>
            </a>
          </li>
          <li>
            <a href="#" className="mt-5">
              <i className="material-icons relative top-7px mr-5 hidden-xs">&#xE63A;</i>
              <span>我的影音</span>
            </a>
          </li>
          <li>
            <a href="#" className="mt-5">
              <i className="material-icons relative top-7px mr-5 hidden-xs">&#xE639;</i>
              <span>我的直播</span>
            </a>
          </li>
          <li>
            <a href="#" className="mt-5">
              <i className="material-icons relative top-7px mr-5 hidden-xs">&#xE0CB;</i>
              <span>悄悄話</span>
            </a>
          </li>
          <li className="display-xs-block">
            <a href="#" className="mt-5">
              <span>我的最新關注</span>
            </a>
          </li>
          <li className="display-xs-block">
            <a href="#" className="mt-5">
              <span>我的人氣關注</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
class SideBarAvatar extends Component {
  render() {
    let isAuthenticated = this.props.user.login.isAuthenticated;
    let sideBarAvatarContent;
    if (!isAuthenticated) {
      sideBarAvatarContent = (
        <div className="text-center">
          <Link to='/user/login'>
            <span className="fz-1p1em">登入</span>
          </Link>
          <Link to='/user/register'>
            <span className="fz-1p1em ml-25">註冊</span>
          </Link>
        </div>
      );
    } else {
      sideBarAvatarContent = (
        <div>
          <a href="#member" className="">
            <img src={this.props.user.currentUser.avatar} alt="" className="thumbnail-tiny" />
            <span className="fz-1p1em ml-5">{this.props.user.currentUser.name}</span>
          </a>
          <span className="relative hidden-xs">
            <Link to="/profile" className="ml-5" alt="text">
              <i className="material-icons fz-1em relative top-1px">&#xE254;</i>
            </Link>
          </span>
        </div>
      );
    }
    return (
      <div className="avatar">
        <div className="relative">
          {sideBarAvatarContent}
        </div>
      </div>
    );
  }
}

class CategoryButton extends Component {
  render() {
    var categoryButtons = [
      {id: 2, name: "線上直播", link: "#c1"},
      {id: 3, name: "最新", link: "#c2"},
      {id: 4, name: "熱門", link: "#c3"},
      {id: 5, name: "話題", link: "#c4"},
      {id: 6, name: "愛美", link: "#c5"},
      {id: 7, name: "3C", link: "#c6"},
      {id: 8, name: "運動", link: "#c7"},
      {id: 9, name: "愛車", link: "#c8"}
    ];
    return (
      <div className="category mt-30">
        <ul className="text-center xs-mb-40 xs-list">
          <li className="display-xs-block bg-light">
            <a href="#" className="mt-5">
              分類
            </a>
          </li>
          <li className="mt-15 popover popover-sticky hidden-xs">
            <a href="#" className="form-control hover-red radius-20 lh-1p5em fz-1p1em height-40">
              我的關注
            </a>
            <ul>
              <li><a href="#">最新關注</a></li>
              <li><a href="#">人氣關注</a></li>
            </ul>
          </li>

          {categoryButtons.map(function(category){
            return <CategoryButtomGruop key={category.id} data={category} />;
          })}

        </ul>
      </div>
    );
  }
}
class CategoryButtomGruop extends Component {
  render() {
    return (
      <li className="mt-15">
        <a href={this.props.data.link} className="form-control hover-red radius-20 lh-1p5em fz-1p1em height-40">
          {this.props.data.name}
        </a>
      </li>
    );
  }
}

export default SideBar;
