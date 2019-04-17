import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import PostsReducers from './Posts'

const config = {
    key: 'root',
    storage,
    whitelist: ["PostsReducers"]
}

const reducers = persistCombineReducers(config, {
    PostsReducers
})

export default reducers;
