import React from "react";
import { Redirect } from "react-router-dom";

import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form";

export const Dialogs = props => {
  let dialogsElement = props.sideBar.users.map(d => (
    <DialogItem name={d.name} image={d.image} key={d.id} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ));

  let addNewMessage = values => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.blockInfo}>
        <div className={s.messages}>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.messageSend}>
        <Field
          component={"textarea"}
          name={"newMessageBody"}
          placeholder={"Enter your message"}
        ></Field>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm);

// ref={newSendMessages}
// value={props.dialogsPage.newMessage}
// onChange={onMessageChange}
