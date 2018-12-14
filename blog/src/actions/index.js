import jsonPlaceHolder from "../apis/jsonPlaceHolder";

export const fetchPosts = async () => {
  const response = await jsonPlaceHolder.get("/posts");
  return {
    type: "FETCH_POSTS",
    payload: response
  };
};
//this is very wrong . it will give an error : Actions must be plain js objects Use custom middleware
//for async operations.
// Although it seems that we are returning a js object but we are not, we are writing ES6 which
// gets transpiled to ES5 for browsers, if we look into the transpile code we will see that because of
// async-await we are not returning a js object, thats why the error

// Another reason is that by the time our action gets to the reucer we wont have the fetched data


//for correct code go to next commit