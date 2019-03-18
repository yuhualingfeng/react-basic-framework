import {call,put,takeEvery,takeLatest} from 'redux-saga/effects';

    function* fetchUser(action) {
        try {
          console.log('begin-==================');

          const user = yield fetch('./package.json').then((response)=>{
             return response.json();
          });
          console.log(user);

         const delay = (ms) => new Promise((resolve,reject) => setTimeout(()=>resolve(1000), ms));
         const delayResult = yield delay(3000);
         console.log(delayResult);

         yield put({type: "USER_FETCH_SUCCEEDED", user: 'fd'});
           
        } catch (e) {
           console.log(e);
           yield put({type: "USER_FETCH_FAILED", message: e.message});
        }
     }

function* mySaga() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
  }
  
  export default mySaga;