import React from "react";

import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = props => {
  console.log(props);

  let postsElements = props.posts.map(p => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.newpost}>
        <textarea
          ref={newPostElement}
          value={props.newPostText}
          onChange={onPostChange}
        />
        <button onClick={onAddPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
