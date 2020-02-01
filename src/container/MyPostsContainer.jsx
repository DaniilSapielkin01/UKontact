import { connect } from "react-redux";

import { addPostActionCreator } from "../redux";
import { MyPosts } from "../components/Profile/MyPost/MyPosts";

const mapStateToProps = state => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPost
});
const mapDispatchToProps = dispatch => ({
  addPost: newPostText => {
    dispatch(addPostActionCreator(newPostText));
  }
});

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
