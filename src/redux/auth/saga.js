import {
  all,
  fork,
  put,
  select,
  takeEvery,
  call,
  delay,
} from "redux-saga/effects";
import authActions from "./actions";
import { push } from "react-router-redux";

function* watchLoginRequest() {
  yield takeEvery("LOGIN_REQUEST", function* (data) {
    try {
      // data -> user email and password
      // const response = yield call(userLogin, data.data);
      let response = { status: 200 };

      if (response.status === 200) {
        yield put({
          type: authActions.LOGIN_SUCCESS,
          token: "this is test JWT token",
          user: {
            name: "John Doe",
            email: "johndoe@gmail.com",
          },
        });
        yield put(push("/"));
      } else {
        throw response;
      }
    } catch (err) {
      console.log("erorr", err);
      yield put({ type: authActions.LOGIN_ERROR });
    }
  });
}

export default function* authsaga() {
  yield all([fork(watchLoginRequest)]);
}
