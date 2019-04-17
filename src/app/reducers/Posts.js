import * as ActionTypes from '@actions/ActionTypes'

export default function base(state = {}, action) {
    switch (action.type) {
        case ActionTypes.BeginPostFetch:
            {
                return {
                    ...state,
                    type: action.type,
                    isRequesting: true,
                    message: ""
                }
            }

        case ActionTypes.FailedPostFetch:
            {
                return {
                    ...state,
                    type: action.type,
                    isRequesting: false,
                    message: action.message
                }
            }

        case ActionTypes.SuccessPostFetch:
            {
                return {
                    ...state,
                    type: action.type,
                    isRequesting: false,
                    message: "",
                    posts: action.posts
                }
            }

        default:
            return state
    }
}
