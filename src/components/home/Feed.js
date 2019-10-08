import React, { Component } from 'react'
import Post from '../global/Post.js';

export class Feed extends Component {
  render() {
    return (
      <div>
         {this.props.posts.map((post, index) => (
          <Post key={index} post={post}/>
        ))}
      </div>
    )
  }
}

export default Feed
