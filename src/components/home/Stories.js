import React, { Component } from 'react';
import UserCard from "../global/UserCard";
import '../../styles/components/home/Stories.scss';

export class Stories extends Component {
  render() {
    return (
      <div className="home-stories card px-1 pt-1 mb-1">
        <div className="d-flex justify-content-between pb-1">
          <p className="t-gray m-0">Stories</p>
          <a href="https://lucashugdahl.com" className="link"><strong>View All</strong></a>
        </div>
        <div className="home-stories__stories">
          {this.props.stories.map((story, index) => (
            <div className="mb-1" key={index}>
              <UserCard user={story.user} subText={story.time} microSubText={true} avatarSize="medium"/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Stories
