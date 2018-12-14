import jsonPlaceHolder from "../apis/jsonPlaceHolder";

//fetchPost action creator
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//fetchUser action creator
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/user/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
