import React, {Component} from 'react';
import SideBar            from '../partials/sidebar.jsx';
import EditProfile        from '../partials/editProfile.jsx';


class Profile extends Component {
  render() {
    return (
      <div className="row">
        <SideBar user={this.props.user} />
        <EditProfile user={this.props.user}
                     handleFetchUserProfile={this.props.handleFetchUserProfile.bind(this)}
                     handleUsernameChange={this.props.handleUsernameChange.bind(this)}
                     handleDescriptionChange={this.props.handleDescriptionChange.bind(this)}
                     handleMobileChange={this.props.handleMobileChange.bind(this)}
                     handleEditProfileSubmit={this.props.handleEditProfileSubmit.bind(this)}
                     cleanProfileErrorMessage={this.props.cleanProfileErrorMessage.bind(this)} />
      </div>
    );
  }
}

export default Profile;
