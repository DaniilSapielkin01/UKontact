import { usersAPI } from "../api/api";
import { updateObjectArray } from "../utils/objectHalpers";

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTTAL_USERS_COUNT = "SET_TOTTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {
          followed: true
        })
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true };
        //   }
        //   return u;
        // })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectArray(state.users, action.userId, "id", {
          followed: false
        })
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: false };
        //   }
        //   return u;
        // })
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    //сюда приходят данные в action из нижних констант
    case SET_TOTTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      };
    default:
      return state;
  }
};

// сюда приходят action (users)(userId)...приходят из контейнера,
// попадают в контейнер из тупой-компоненты где был вызван метод или
// были отправлены пропсами
export const setUsers = users => ({
  type: SET_USERS,
  users
});
export const followSuccess = userId => ({
  userId,
  type: FOLLOW
});
export const unfollowSuccess = userId => ({
  userId,
  type: UNFOLLOW
});
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setUsersTotalCount = totalUsersCount => ({
  type: SET_TOTTAL_USERS_COUNT,
  count: totalUsersCount
});
export const setIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

//thunk
//getUsersThunkCreator => getUsers
export const requiestUsers = (page, pageSize) => {
  return async dispatch => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(page));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
  };
};
//thunk
//followUnfolloFlow => забрал дулбирующийся код
const followUnfolloFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const follow = userId => {
  return async dispatch => {
    let apiMethod = usersAPI.follow.bind(userId);
    let actionCreator = followSuccess;

    followUnfolloFlow(dispatch, userId, apiMethod, actionCreator);
  };
};
//thunk
export const unfollow = userId => {
  return async dispatch => {
    let apiMethod = usersAPI.unfollow.bind(userId);
    let actionCreator = unfollowSuccess;

    followUnfolloFlow(dispatch, userId, apiMethod, actionCreator);
  };
};
