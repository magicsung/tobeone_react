import React, {Component} from 'react';
import SideBar from '../partials/sidebar.jsx';
import Wall from '../partials/wall.jsx';

class IndexContent extends Component {
  render() {
    return (
      <div className="row">
        <SideBar noticeNumber={this.props.noticeNumber}
                 currentUser={this.props.currentUser}/>
        <Wall postList={this.props.postList}
              currentUser={this.props.currentUser} />
      </div>
    );
  }
}

export default IndexContent;
