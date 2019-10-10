import React, { Component } from 'react';
import '../../styles/components/global/Post.scss'
import Icon from './Icon'; 
import { connect } from 'react-redux';
import UserCard from './UserCard';

export class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarImageLoaded: false,
      postImageLoaded: false,
      likedByImageLoaded: false,
      isLoaded: false
    }
  }

  componentDidMount() {
    console.log(this.props.post)
  }

  render() {


    return (
      <div>
          <div className="post card w-100 flex-column">
            <div className="post-top d-flex align-items-center justify-content-between p-1">
                <div className="d-flex align-items-center p-0">
                  <UserCard user={this.props.post.owner} avatarSize="medium"/>
                  {/* <img className="avatar" alt={this.props.users.userList[this.props.post.owner].name.first} src={this.props.users.userList[this.props.post.owner].picture.thumbnail} />
                  <p className="t-bold ml-1">{this.props.users.userList[this.props.post.owner].login.username}</p> */}
                </div>
                <div className="d-flex align-items-center justify-content-end p-0">
                  <Icon width="24px" height="24px" x="-328px" y="120px"/>
                </div>        
            </div>
            <div className="post-image">
              <img className="w-100" alt={`taken by ${this.props.users.userList[this.props.post.owner].name.first}`} src={this.props.images.imageList[this.props.post.image]}/>
            </div>
            <div className="post-interactions d-flex align-items-center justify-content-between pt-1 px-1">
              <div className="d-flex align-items-center p-0">
                <button className="button button--no-border">
                  <Icon width="24px" height="24px" x="-75px" y="50px"/>
                </button>
                <button className="button button--no-border">
                  <Icon width="24px" height="24px" x="-178px" y="147px"/>
                </button>
                <button className="button button--no-border">
                  <Icon width="24px" height="24px" x="-330px" y="95px"/>
                </button>
              </div>
              <div className="d-flex align-items-center justify-content-end p-0">
                <Icon width="24px" height="24px" x="-273px" y="24px"/>
              </div>        
            </div>
            <div className="post-likes px-1 d-flex align-items-center">
              <img className="post-likes__avatar avatar avatar--small" alt={this.props.users.userList[this.props.post.likedBy].name.first} src={this.props.users.userList[this.props.post.likedBy].picture.thumbnail}></img>
              <p className="m-0">Liked by</p>
              <a href="https://lucashugdahl.com" className="post-likes__user t-bold link"> {this.props.users.userList[this.props.post.likedBy].login.username}</a>
              <p className="m-0"> and </p>
              <a href="https://lucashugdahl.com" className="post-likes__likes link t-bold">{this.props.post.likes}</a>
              <p className="m-0"> others </p>
            </div>
            <div className="post-caption px-1">
              <div className="d-flex">
                <a href="https://lucashugdahl.com" className="link t-bold">{this.props.users.userList[this.props.post.owner].username}</a>
                <p className="my-0 post-caption__text">{this.props.quotes.quoteList[this.props.post.caption]} <a href="https://lucashugdahl.com" className="link t-gray" hre="https://lucashugdahl.com">more</a></p>
              </div>
            </div>
            <div className="post-comments px-1">
              <a href="https://lucashugdahl.com" className="link t-gray post-comments__view-all" hre="https://lucashugdahl.com">View all 12 comments</a>
              {
              ['',''].map((post,index) => (
                  <p key={index} className="my-0">
                    <a href="https://lucashugdahl.com" className="link d-inline-block t-bold post-comments__user">{this.props.users.userList[this.props.post.comments[index].user].login.username}</a>
                    {this.props.quotes.quoteList[this.props.post.comments[index].comment]}
                  </p>
                ))
              }
              <p className="my-0 t-gray post-comments__time t-micro">{this.props.post.time}</p>
            </div>
            <div className="post-add-comment px-1 d-flex justify-content-between align-items-center">
              <form className="d-flex justify-content-between align-items-center w-100">
                <input type="text" placeholder="Add comment..."/>
                <button className="button button--no-border t-bold t-blue" type="submit">Post</button>
              </form>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  images: state.images,
  quotes: state.quotes,
});

export default connect(mapStateToProps)(Post);
