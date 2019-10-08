import React, { Component } from 'react'
import { connect } from 'react-redux';

export class UserCard extends Component {
  render() {
    return (
      <div className="d-flex align-items-center">     
          <img className={`avatar avatar--${this.props.avatarSize || 'large'}  mr-1`} src={this.props.users.userList[this.props.user].picture.thumbnail} alt="user avatar"/>
          <div>
            <a className="my-0 link" href="https://lucashugdahl.com"><strong>{this.props.users.userList[this.props.user].login.username}</strong></a>
            { this.props.subText &&
              <p className={`my-0 ${this.props.microSubText ? 't-micro t-gray' : ''}`}>{this.props.subText}</p>
            }
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

export default connect(mapStateToProps)(UserCard);
