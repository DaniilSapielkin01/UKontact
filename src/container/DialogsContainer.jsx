import { connect } from "react-redux";
import {
  addMessageDialogActionCreator,
  updateNewMessageActionCreator
} from "../redux";
import { Dialogs } from "../components/Dialogs/Dialogs";

const mapStateToProps = state => ({
  dialogsPage: state.dialogsPage,
  sideBar: state.sideBar
});
const mapDispatchToProps = dispatch => ({
  updateNewMessageBody: text => {
    dispatch(updateNewMessageActionCreator(text));
  },
  sendMessage: () => {
    dispatch(addMessageDialogActionCreator());
  }
});

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
