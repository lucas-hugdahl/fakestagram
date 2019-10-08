import React, { Component } from 'react'
import UserCard from "../global/UserCard";

export class Suggestions extends Component {
  render() {
    return (
      <div className="home-suggestions card px-1 pt-1">
        <div className="d-flex justify-content-between pb-1">
          <p className="t-gray m-0">Suggestions For You</p>
          <a href="https://lucashugdahl.com" className="link"><strong>See All</strong></a>
        </div>
        <div className="home-suggestions__users">
          {this.props.suggestions.map((suggestion, index) => (
            <div className="mb-1" key={index}>
              <UserCard  user={suggestion.user} subText={'followed by' + suggestion.followedBy} microSubText={true} avatarSize="medium"/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Suggestions
