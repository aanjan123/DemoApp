import { takeEvery, call, put, take } from "redux-saga/effects";
import * as ActionTypes from './../actions/ActionTypes'
import * as Services from '@services'


// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* getPosts() {
  yield takeEvery(ActionTypes.BeginPostFetch, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchPosts() {
  return Services.getPosts()
    .then(posts => posts)
    .catch(err => err);
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchPosts);
    const posts = response;
    yield put({ type: ActionTypes.SuccessPostFetch, posts });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: ActionTypes.FailedPostFetch, message: error });
  }
}