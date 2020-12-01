import {handleActions} from 'redux-actions';
import {
  offLoadingAction,
  onLoadingAction,
  setDataAction,
  setIsPlayingAction,
} from '../actions';
const initialState = {
  isLoading: false,
  listMusic: [],
  playing: {
    isPlaying: false,
    item: {},
  },
};
export default handleActions(
  {
    [onLoadingAction.toString()]: (state) => ({...state, isLoading: true}),
    [offLoadingAction.toString()]: (state) => ({...state, isLoading: false}),
    [setDataAction.toString()]: (state, {payload}) => ({
      ...state,
      listMusic: payload,
    }),
    [setIsPlayingAction.toString()]: (state, {payload}) => ({
      ...state,
      playing: {
        isPlaying: true,
        item: payload,
      },
    }),
  },
  initialState,
);
