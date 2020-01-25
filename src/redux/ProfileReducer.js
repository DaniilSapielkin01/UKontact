export const ADD_POST = "ADD-POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "How are you ? ", likesCount: 111 },
    { id: 2, message: "HEY !)", likesCount: 12 }
  ],
  newPost: "",
  profile: null
};

export const ProflieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = state.newPost;
      return {
        ...state,
        newPost: "",
        posts: [...state.posts, { id: 6, likesCount: 0, message: newPost }]
        // let newPost = {
        //   id: 5,
        //   message: state.newPost,
        //   likesCount: 0
        // };
        // let stateCopy = { ...state };
        // stateCopy.posts = [...state.posts];
        // stateCopy.posts.push(newPost);
        // stateCopy.newPost = "";
        // return stateCopy;
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPost: action.newText
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    // let stateCopy = { ...state };
    // stateCopy.newPost = action.newText;
    // return stateCopy;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST
});
export const updateNewPostActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});
export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
});
