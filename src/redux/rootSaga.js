import { all, takeLatest, put } from "redux-saga/effects"
import {success,failure} from "./posts/reducer"
import {LOGIN} from "./posts/action"

export function* getLoginSaga(action) {
  try {
    let data = action.payload
    if(data.username && data.password){
    yield put({type:success,data:"login successful"});

    }
    else{
        yield put({type:failure,data:"login failed"});
    }
  } catch (err) {
    yield put({type:failure,data:"login failed"});
  }
}

export default function* loginManagerSaga() {
  yield all([takeLatest(LOGIN, getLoginSaga)]);
}


