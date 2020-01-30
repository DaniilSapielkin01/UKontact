import React from "react";
import { Redirect } from "react-router-dom";

import { DialogItem } from "./DialogItem/DialogItem";
import { Message } from "./Message/Message";
import s from "./Dialogs.module.css";

export const Dialogs = props => {
  let dialogsElement = props.sideBar.users.map(d => (
    <DialogItem name={d.name} image={d.image} key={d.id} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map(m => (
    <Message message={m.message} key={m.id} />
  ));
  const newSendMessages = React.createRef();

  const onAddMessageDialog = () => {
    props.sendMessage();
  };
  const onMessageChange = e => {
    let text = e.target.value;
    props.updateNewMessageBody(text);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.blockInfo}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.messageSend}>
          <textarea
            ref={newSendMessages}
            value={props.dialogsPage.newMessage}
            onChange={onMessageChange}
          ></textarea>
          <button onClick={onAddMessageDialog}>Send</button>
        </div>
      </div>
    </div>
  );
};
