import {actionTypes} from './../actions'

/**
 * @function secretWordReducer
 * @param {string} state - State before reducer
 * @param {object} action - Action to sent reducer
 * @returns {string} - New state
 */
export default (state = null, action) => {
    switch(action.type) {
        case actionTypes.SET_SECRET_WORD:
            return action.payload
        default: 
            return state
    }    
}