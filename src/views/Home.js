import React, { Component } from 'react'
import { connect } from 'react-redux';
import Feed from "../components/home/Feed"
import Stories from "../components/home/Stories"
import Suggestions from "../components/home/Suggestions"
import UserCard from "../components/global/UserCard"
import skeletonLoader from "../assets/img/image-loader.gif"

import '../styles/views/Home.scss'

function randomKeyFromObject(obj, type) {
  var keys = Object.keys(obj);
  let randomKey = keys[Math.floor(Math.random() * keys.length) + 0]
  return randomKey;
};

export class Home extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      posts: [],
      error: null
    }
  }

  //Make a bunch of posts from random data
  generateMainFeed(count = 20) {
    let post = {};  
    let posts = [];  
    for (let i = 0; i < count; i++) {
      post = {
        owner: null,
        likedBy: null,
        likes: null,
        caption: null,
        comments: [],
        time: null
      };

      post.owner = randomKeyFromObject(this.props.users.userList);
      post.image = randomKeyFromObject(this.props.images.imageList);
      post.caption = randomKeyFromObject(this.props.quotes.quoteList);
      post.likedBy = randomKeyFromObject(this.props.users.userList);
      post.likes = Math.floor(Math.random() * 9755) + 1;
      post.time = `${Math.floor(Math.random() * 30) + 2} HOURS AGO`;
      post.hasStory = Math.floor(Math.random() * 10) + 1 > 7 ? true : false
      for(let i = 0; i < 10; i++) {
        post.comments.push({
          user: randomKeyFromObject(this.props.users.userList),
          comment: randomKeyFromObject(this.props.quotes.quoteList)
        });
      }
      posts.push({...post});
    }
    return posts;
  }

  generateStories() {
    let stories = [];
    for (let i = 0; i < 10; i++) {
      stories.push({
        user: randomKeyFromObject(this.props.users.userList),
        time: `${Math.floor(Math.random() * 30) + 2} HOURS AGO`
      })
    }
    return stories;
  }

  generateSuggested() {
    let suggested = [];
    for (let i = 0; i < 3; i++) {
      suggested.push({
        user: randomKeyFromObject(this.props.users.userList),
        followedBy: this.props.users.userList[randomKeyFromObject(this.props.users.userList)].login.username
      })
    }
    return suggested;
  }

  getOwnUser() {  return randomKeyFromObject(this.props.users.userList) }

  throwError(error) {   this.setState({error})  }
  
  componentDidUpdate(prevProps) {
    if (this.props.users.error && this.props.users.error !== prevProps.users.error) {
      this.throwError(`Fetch users: ${this.props.users.error}`);

    } else if (this.props.quotes.error && this.props.quotes.error !== prevProps.quotes.error) {
      this.throwError(`Fetch quotes: ${this.props.users.error}`);

    } else if (this.props.images.error && this.props.images.error !== prevProps.images.error) {
      this.throwError(`Fetch images: ${this.props.users.error}`);

    } else if (this.props.users.isLoaded && this.props.quotes.isLoaded && this.props.images.isLoaded && !this.state.isLoaded) {
      this.setState({
        posts: this.generateMainFeed(),
        ownUser: this.getOwnUser(),
        stories: this.generateStories(),
        suggestions: this.generateSuggested(),
        isLoaded: true
      });
    }
  }
  
  render() {
    return (
      <div className="container--main container">
        {!this.state.isLoaded ?
          <div className="row">
              <div className="col-8">
                <img className="w-100" src={skeletonLoader} alt="loader"/>  
              </div>
          </div>
        :
          <div className="row">
            <div className="col-8">
              { this.state.error && <h1>{this.state.error}</h1> }
              <Feed posts={this.state.posts}/>
            </div>
            <div className="col-4">
              <div className="home-right-sidebar">
                <div className="mb-1">
                  <UserCard user={this.state.ownUser} subText={`${this.props.users.userList[this.state.ownUser].name.first} ${this.props.users.userList[this.state.ownUser].name.first}` }/>
                </div>
                <Stories stories={this.state.stories}/>
                <Suggestions suggestions={this.state.suggestions}/>
                <div className="my-1">
                  <a href="https://lucashugdahl.com" className="link t-gray">Developed by Lucas Hugdahl</a>
                  <p className="t-gray t-micro">© 2019 FAKESTAGRAM</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
  images: state.images,
  quotes: state.quotes,
});

export default connect(mapStateToProps)(Home);
