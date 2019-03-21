import {call,put,all,select,takeEvery,takeLatest} from 'redux-saga/effects';

function* fetchConfigFile(action) {
   try {

      const result = yield call(fetch,'./package.json');

   yield put({type: "FETCH_CONFIG_FILE_SUCCEEDED", result:result.json()});
      
   } catch (e) {
      yield put({type: "FETCH_CONFIG_FILE_FAILED", message: e.message});
   }
}

function* fetchConfigFileSaga() {
    yield takeLatest("FETCH_CONFIG_FILE_REQUESTED", fetchConfigFile);
    yield takeEvery('*', function* logger(action) {
      const state = yield select()
  
      console.log('action', action)
      console.log('state after', state)
    })

}

function* fetchGithub(action) {
   try {

      const result = yield call(fetch,'https://api.github.com/users/yuhualingfeng');

   yield put({type: "FETCH_GITHUB_SUCCEEDED", result:result.json()});
      
   } catch (e) {
      yield put({type: "FETCH_GITHUB_FAILED", message: e.message});
   }
}

function* fetchGithubSaga(){
   yield takeLatest("FETCH_GITHUB_REQUESTED",fetchGithub);

}

function* delayTimeSaga(){
   const delay = (ms) => new Promise((resolve,reject) => setTimeout(()=>resolve(1000), ms));
   const delayResult = yield delay(3000);
   console.log(delayResult);
}


function* rootSaga(){
   yield all([
     fetchConfigFileSaga(),
     delayTimeSaga(),
     fetchGithubSaga()
   ]);
}
  
  export default rootSaga;

  // saga是一个Generator函数,