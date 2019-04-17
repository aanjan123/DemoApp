import * as ActionTypes from './ActionTypes'
import * as Services from '@services'

export const getPosts = () => {
    return (dispatch, getState) => {
        dispatch({ type: ActionTypes.BeginPostFetch })

        Services.getPosts()
            .then((posts) => {
                dispatch({ type: ActionTypes.SuccessPostFetch, posts })
            })
            .catch((errMsg) => {
                dispatch({ type: ActionTypes.FailedPostFetch, message: errMsg })
            })
    }
}
