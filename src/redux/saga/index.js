import {call, put, takeLatest, all, fork} from 'redux-saga/effects';
import {
  fetchAsyncAction,
  offLoadingAction,
  onLoadingAction,
  setDataAction,
} from '../actions';
const fetchAsyncService = async (endpoint) => {
  console.log('k41', endpoint);
  try {
    let response = await fetch(
      `https://fakeserver-musicaap.herokuapp.com/${endpoint}`,
    );
    return response.json();
  } catch (error) {
    console.log('k42', error);
    throw error;
  }
};
function* fetchAsyncWatch() {
  console.log('k3');
  yield takeLatest(fetchAsyncAction, function* ({payload}) {
    console.log('k4', payload);
    try {
      yield put(onLoadingAction());
      const {endpoint} = payload;
      const result = yield call(fetchAsyncService, endpoint);
      if (result) {
        yield put(setDataAction(result));
        if (payload?.callback) {
          payload.callback('', result);
        }
        console.log('k5', result[0]);
      }
    } catch (error) {
      // else if (payload?.callback) payload.callback("Server Error", {});
      // yield put(offLoadingAction());
      console.log('k6', error);
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
