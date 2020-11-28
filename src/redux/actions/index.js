export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export const selectSubreddit = (subreddit) => ({
  type: SELECT_SUBREDDIT,
  subreddit,
});

export const invalidateSubreddit = (subreddit) => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit,
});

export const requestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  subreddit,
});

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  data: json,
});

export const fetchPosts = (endpoint) => (dispatch) => {
  dispatch(requestPosts(endpoint));
  return fetch(`https://fakeserver-musicaap.herokuapp.com/${endpoint}`)
    .then((response) => response.json())
    .then((json) => dispatch(receivePosts(endpoint, json)));
};

// const shouldFetchPosts = (state, subreddit) => {
//   const posts = state.postsBySubreddit[subreddit];
//   if (!posts) {
//     return true;
//   }
//   if (posts.isFetching) {
//     return false;
//   }
//   return posts.didInvalidate;
// };

// export const fetchPostsIfNeeded = (subreddit) => (dispatch, getState) => {
//   if (shouldFetchPosts(getState(), subreddit)) {
//     return dispatch(fetchPosts(subreddit));
//   }
// };
