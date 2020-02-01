import React from "react";
import { Field, reduxForm } from "redux-form";

import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = props => {
  let postsElements = props.posts.map(p => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
  const onAddPost = values => {
    // Field name={"newPostText"} =>values.newPostText
    props.addPost(values.newPostText);
  };

  return (
    <div>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.newpost}>
        <Field name={"newPostText"} component={"textarea"} />
        <button>Add post</button>
        <button>Remove</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);
