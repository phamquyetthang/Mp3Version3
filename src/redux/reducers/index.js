import {handleActions} from 'redux-actions';
import {darkTheme} from '../../asset/styles/themes';
import {
  offLoadingAction,
  onLoadingAction,
  setDarkModeAction,
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
  listPlay: [],
  theme: darkTheme,
};
export default handleActions(
  {
    [onLoadingAction.toString()]: (state) => ({...state, isLoading: true}),
    [offLoadingAction.toString()]: (state) => ({...state, isLoading: false}),
    [setDataAction.toString()]: (state, {payload}) => ({
      ...state,
      listMusic: payload,
      listPlay: payload.map(
        (i) => ({
          id: String(i.id),
          url: i.url,
          title: i.name,
          artist: i.singer,
          artwork:i.image,
        })
      )
    }),
    [setIsPlayingAction.toString()]: (state, {payload}) => ({
      ...state,
      playing: {
        isPlaying: true,
        item: payload,
      },
    }),
    [setDarkModeAction.toString()]: (state, {payload}) => {
      return {
        ...state,
        theme: payload,
      };
    },
  },
  initialState,
);
