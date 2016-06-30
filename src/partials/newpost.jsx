import React, {Component} from 'react';
import { Link } from 'react-router';

class NewPost extends Component {
  render() {
    let iconStyle = {
      position: 'relative',
      top: '-2px'
    };
    return (
      <div className="new-post bg-white pd-20 radius-5 xs-radius-0 mb-15">
        <div className="row">
          <div className="col-md-1 col-sm-2 hidden-xs">
            <div className="avatar">
              <div className="relative">
                <a href="#member" className="">
                  <img src={this.props.currentUser.avatar} alt="" className="thumbnail-small" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-11 col-sm-10 col-xs-12">
            <div className="row mt-5">
              <div className="col-xs-12">
                <Link to="/upload">
                  <button type="submit" name="button" className="btn btn-red radius-5 width-300 xs-w100">
                    <i className="material-icons relative top-3px fz-1p5em">&#xE2C3;</i>
                    <span className="" style={iconStyle}>
                      上傳影片
                    </span>
                  </button>
                </Link>
                <span className="ml-20 bg-gray-lighter pd-5 left-arrow relative radius-right-5 hidden-xs hidden-sm">
                  想秀什麼？立馬上傳！
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


module.exports = NewPost;
