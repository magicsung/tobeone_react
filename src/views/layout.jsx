import React, {Component} from 'react';
import { connect }        from 'react-redux';
import Header             from '../partials/header.jsx';
import Footer             from '../partials/footer.jsx';
import { userLogout }     from '../actions/userLoginActions';

class Layout extends Component {
  handleLogoutClick(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(userLogout());
  }
  render() {
    return (
      <div className="h100">
        <div id="main-content">
          <input type="checkbox" className="hidden" id="toggle-menu" defaultChecked />
          <Header user={this.props.user}
                  handleLogoutClick={this.handleLogoutClick.bind(this)} />
          <div className="container-fluid mt-15 mb-15 header-height">
            {this.props.children && React.cloneElement(this.props.children, {
             user: this.props.user,
             postList: this.props.postList
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postList: state.posts.postList,
    user: state.user
  };
}
export default connect(mapStateToProps)(Layout);
