import React, {Component} from 'react';
import moment from 'moment';

class Post extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isReportOpen: false
    };
  };

  reportClick(event) {
    event.preventDefault();
    this.setState({
      isReportOpen: !this.state.isReportOpen
    })
  }

  render() {
    let timeAgo = moment(this.props.created_at, 'YYYY M D h:m:s').fromNow();
    let reportMenu;
    if (this.state.isReportOpen) {
       reportMenu = <ReportMenu />;
    }
    return (
      <div className="border-bottom-gray-1px pd-20">
        <div className="row">
          <div className="col-xs-12 clearfix">
            <div className="avatar mb-15 mr-15 pull-left">
              <div className="relative">
                <a href="/talent" className="">
                  <img src={this.props.owner.avatar} alt="" className="thumbnail-small" />
                </a>
              </div>
            </div>
            <div className="pull-left w100-65">
              <div className="inline-block pull-right relative">
                <a href="#" className="radius-5 ml-15" onClick={this.reportClick.bind(this)}>
                  <i className="material-icons">&#xE313;</i>
                </a>
                { reportMenu }
              </div>
              <a href="#" className="btn btn-xs btn-gray-light radius-5 pull-right">關注中</a>
              <div className="name fz-1p4em link-red">
                <a href="/talent/ooo">{this.props.owner.username}</a>
              </div>
              <div className="fz-1p2em">
                <span className="title">{this.props.title}</span>
                <span className="time-ago fz-p8em"> - {timeAgo}</span>
              </div>
            </div>
          </div>
          <div className="col-xs-12 custom-content mb-20 pl-80 xs-pl-15">
            <div className="description mt-5">
              {this.props.description}
            </div>
            <div className="video mt-15 relative inline-block">
              <a href="/video/xxx">
                <img src="http://dummyimage.com/640x360/ffffff/fff&text=play-video" alt="" />
                <div className="overlay">
                  <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.props.youtubeVideoID} frameBorder="0" allowFullScreen></iframe>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ReportMenu extends Component {
  render() {
    return (
      <ul className="dropdown-menu show pt-10 radius-5">
        <li className="ml-15 mb-5">檢舉這部影片：</li>
        <li><a href="#">檢舉原因1</a></li>
        <li><a href="#">檢舉原因2</a></li>
        <li><a href="#">檢舉原因3</a></li>
        <li><a href="#">檢舉原因4</a></li>
        <li><a href="#">檢舉原因5</a></li>
      </ul>
    );
  }
}

export default Post;
