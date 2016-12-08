import constants from '../constants/app-constants.js'
import dispatcher from '../dispatcher/dispatcher.js'

export let Actions = {
    incrementCount: () => {
        dispatcher.dispatch({
            actionType: constants.INCREMENT
        })
    },
    declineCount: () => {
        dispatcher.dispatch({
            actionType: constants.DECLINE
        })
    }

}