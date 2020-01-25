import { connect } from "react-redux";

import { updateNewPostActionCreator, addPostActionCreator } from "../redux";
import { MyPosts } from "../components/Profile/MyPost/MyPosts";

const mapStateToProps = state => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPost
});
const mapDispatchToProps = dispatch => ({
  updateNewPostText: text => {
    let action = updateNewPostActionCreator(text);
    dispatch(action);
  },
  addPost: () => {
    dispatch(addPostActionCreator());
  }
});

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts); 
