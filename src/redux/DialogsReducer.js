export const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Привет))" },
    { id: 2, message: "Привеn!)" }
  ]
};

export const DialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    // case UPDATE_NEW_MESSAGE:
    //   return {
    //     ...state,
    //     newMessage: action.newText
    //   };
    case ADD_MESSAGE:
      let newText = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: newText }]
      };
    default:
      return state;
  }
};

// export const updateNewMessageActionCreator = text => ({
//   type: UPDATE_NEW_MESSAGE,
//   newText: text
// });
export const addMessageDialogActionCreator = newMessageBody => ({
  type: ADD_MESSAGE,
  newMessageBody
});
