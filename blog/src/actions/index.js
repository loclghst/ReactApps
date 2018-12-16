import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";

//fetchPostsAndUser action creator

export const fetchPostsAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.uniq(_.map(getState().posts, "userId")).forEach(id =>
    dispatch(fetchUser(id))
  );
};

//fetchPost action creator
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//fetchUser action creator
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// //memoizing the action creator
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

// //fetchUser action creator
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
