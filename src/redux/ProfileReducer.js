import { usersAPI, profileAPI } from "../api/api";

export const ADD_POST = "ADD-POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_STATUS = "SET_STATUS";
export const DELETE_POST = "DELETE_POST";

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
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.postId)
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
export const deletePost = postId => ({
  type: DELETE_POST,
  postId
});

// thunk
export const getUserProfile = userId => async dispatch => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatus = userId => async dispatch => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const updateStatus = status => async dispatch => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
