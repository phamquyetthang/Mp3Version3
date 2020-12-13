import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import {
  fetchAsyncAction,
  offLoadingAction,
  onLoadingAction,
  setDataAction,
} from '../actions';
const fetchAsyncService = async (endpoint) => {
  try {
    let response = await fetch(
      `https://fakeserver-musicaap.herokuapp.com/${endpoint}`,
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};
function* fetchAsyncWatch() {
  yield takeLatest(fetchAsyncAction, function* ({payload}) {
    try {
      yield put(onLoadingAction());
      const {endpoint} = payload;
      const result = yield call(fetchAsyncService, endpoint);
      if (result) {
        yield put(setDataAction(result));
        if (payload?.callback) {
          payload.callback('', result);
        }
      }
    } catch (error) {
      throw error;
    } finally {
      // else if (payload?.callback) payload.callback("Server Error", {});
      yield put(offLoadingAction());
    }
  });
}
export default function* rootSaga() {
  yield all([fetchAsyncWatch].map(fork));
}
// export default {
//   fetchAsyncWatch,
// };
