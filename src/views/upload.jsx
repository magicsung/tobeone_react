import React, {Component} from 'react';
import SideBar            from '../partials/sidebar.jsx';
import UploadStep         from '../partials/uploadStep.jsx';
import Uploader           from '../partials/uploader.jsx';

class Upload extends Component {
  render() {
    return (
      <div className="row">
        <SideBar user={this.props.user}
                 isSidebarHidden={true} />
        <UploadStep />
        <Uploader handleUploadSubmit={this.props.handleUploadSubmit.bind(this)} />
      </div>
    );
  }
}

export default Upload;
