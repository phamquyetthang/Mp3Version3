import {handleActions} from 'redux-actions';
import {offLoadingAction, onLoadingAction, setDataAction} from '../actions';
const initialState = {
  isLoading: false,
  listMusic: [],
};
export default handleActions(
  {
    [onLoadingAction.toString()]: (state) => ({...state, isLoading: true}),
    [offLoadingAction.toString()]: (state) => ({...state, isLoading: false}),
    [setDataAction.toString()]: (state, {payload}) => ({
      ...state,
      listMusic: payload,
    }),
  },
  initialState,
);
