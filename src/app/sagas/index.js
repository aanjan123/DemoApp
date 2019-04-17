import { fork,all } from 'redux-saga/effects';
import { getPosts } from './saga';

export default function* root_saga() {
    yield all([
        getPosts()
    ]);
}