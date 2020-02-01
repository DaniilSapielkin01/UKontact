import { usersAPI, profileAPI } from "../api/api";

export const ADD_POST = "ADD-POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";
let initialState = {
  posts: [
    { id: 1, message: "How are you ? ", likesCount: 111 },
    { id: 2, message: "HEY !)", likesCount: 12 }
  ],
  profile: null,
  status: ""
};

export const ProflieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = action.newPostText;
      return {
        ...state,
        posts: [...state.posts, { id: 6, likesCount: 0, message: newPost }]
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    // let stateCopy = { ...state };
    // stateCopy.newPost = action.newText;
    // return stateCopy;
    default:
      return state;
  }
};

export const addPostActionCreator = newPostText => ({
  type: ADD_POST,
  newPostText
});

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
});
export const setStatus = status => ({
  type: SET_STATUS,
  status
});

// thunk
export const getUserProfile = userId => dispatch => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
};

export const getStatus = userId => dispatch => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = status => dispatch => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
