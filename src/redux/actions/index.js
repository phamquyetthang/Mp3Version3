export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const FETCH_API = 'FETCH_API';
import {createActions} from 'redux-actions';

const actions = createActions({
  ON_LOADING_ACTION: null,
  OFF_LOADING_ACTION: null,
  FETCH_ASYNC_ACTION: (body_api) => body_api,
  SET_DATA_ACTION: null,
  SET_IS_PLAYING_ACTION: null,
  SET_DARK_MODE_ACTION: null,
});

export const {
  onLoadingAction,
  offLoadingAction,
  fetchAsyncAction,
  setDataAction,
  setIsPlayingAction,
  setDarkModeAction,
} = actions;
