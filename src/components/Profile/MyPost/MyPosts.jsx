import React from "react";
import { Field, reduxForm } from "redux-form";

import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import {
  maxLengthCreator,
  requiredField
} from "../../../utils/validators/validators";
import { Textarea } from "../../index";

const maxLength10 = maxLengthCreator(10);

export const MyPosts = React.memo(props => {
  // При использовании классовой компоненты
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.state;
  // }

  let postsElements = [...props.posts]
    .reverse() //перевернула копию массива (мутабельность присуцтвует)
    .map(p => <Post message={p.message} likeCount={p.likeCount} />);
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
});

const AddNewPostForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.newpost}>
        <Field
          name={"newPostText"}
          component={Textarea}
          validate={[requiredField, maxLength10]}
        />
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);
