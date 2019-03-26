import {call,put,all,select,takeEvery,takeLatest,take,race,delay} from 'redux-saga/effects';
import configs from './config'; 
import doFetch from './fetch';

/**
 * saga生成器
 * @param {*} config 
 * config.name
 * config.url
 * config.option
 */
function sagaCreator(config){
   const {name,url,option} = config;
   return function* (action) {
      try {
         yield put({type: "FETCH_"+name+"_LOADING"});
         const result = yield call(doFetch,url,option);
         yield put({type: "FETCH_"+name+"_SUCCEEDED", result});
         
      } catch (e) {
         yield put({type: "FETCH_"+name+"_FAILED", message: e.message});
      }
   };
}

/**
 * 异步请求列表
 */
function* fetchList(){
   for(var i in configs){
      let config = configs[i];
      yield takeLatest("FETCH_"+config.name+"_REQUESTED",sagaCreator(config));
   }

}




/**
 * 延时demo
 */
function* delayTimeSaga(){
   const delay = (ms) => new Promise((resolve,reject) => setTimeout(()=>resolve(1000), ms));
   const delayResult = yield delay(3000);
   return delayResult;
}

/**
 * action日志监控
 */
function* watchAndLog(){
   yield takeEvery('*', function* logger(action) {
      const state = yield select();
      //console.log('action', action);
      //console.log('state after', state);
   });
   return 1;
}

/**
 * race Effect
 */
function* raceTest(){
   let result = yield race({
      timeout1:call(doFetch,'./package.json'),
      timeout2:call(doFetch,'https://api.github.com/users/yuhualingfeng',{mode:'cors'})

   });
   //console.log(result);

}

/**
 * 同时执行多个任务
 */
function* parallelTasks(){
   const result = yield all([call(doFetch,'./package.json'),call(doFetch,'https://api.github.com/users/yuhualingfeng',{mode:'cors'})]);
   //console.log(result);
}



function* rootSaga(){
  const result =  yield all([
     fetchList(),
     delayTimeSaga(),
     watchAndLog(),
     raceTest(),
     parallelTasks()
   ]);
   console.log(result);
}
  
  export default rootSaga;

  // saga是一个Generator函数,effect是一个普通的javascript对象