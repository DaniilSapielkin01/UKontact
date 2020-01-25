export const ADD_MESSAGE = "ADD-MESSAGE";
export const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Привет))" },
    { id: 2, message: "Привеn)" }
  ]
};

export const DialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        newMessage: action.newText
      };
    case ADD_MESSAGE:
      let newText = state.newMessage;
      return {
        ...state,
        newMessage: "",
        messages: [...state.messages, { id: 6, message: newText }]
        // let newText = stateCopy.newMessage;
        // stateCopy.messages = [...state.messages];
        // stateCopy.messages.push({ id: 6, message: newText });
        // stateCopy.newMessage = "";
        // return stateCopy;
      };
    default:
      return state;
  }
};

export const updateNewMessageActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE,
  newText: text
});
export const addMessageDialogActionCreator = () => ({
  type: ADD_MESSAGE
});
