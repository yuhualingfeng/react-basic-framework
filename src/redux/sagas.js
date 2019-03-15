import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';

    function* fetchUser(action) {
        try {
            console.log('begin-==================');
           const user = yield call(fetch('/package.json'), action.payload.userId);
           debugger;
           console.log(user);
           yield put({type: "USER_FETCH_SUCCEEDED", user: user});
        } catch (e) {
           yield put({type: "USER_FETCH_FAILED", message: e.message});
        }
     }

function* mySaga() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
  }
  
  export default mySaga;