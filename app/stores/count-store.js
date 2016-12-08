import constants from '../constants/app-constants.js'
import dispatcher from '../dispatcher/dispatcher.js'
import {EventEmitter} from 'events'


// backing variables
let _count =0

function getCount (){
    return _count
}

function incrementCount () {
   _count++
}

function declineCount () {
    _count--
}

// define the actual store
export let TodoStore = Object.assign({}, EventEmitter.prototype, {
    getCount: getCount,

    emitChange: function () {
        console.log('emitEvent')
        this.emit('CHANGE_EVENT')
    },

    addChangeListener: function (callback) {
        console.log('addChangeListener')
        this.on('CHANGE_EVENT',callback)
    },

    removeChangeListener: function (callback) {
        console.log('removeEventListener')
        this.removeListener('CHANGE_EVENT',callback)
    }
})

// register with the dispatcher
dispatcher.register(action => {
    console.log(action)
    switch(action.actionType) {
        case 'INCREMENT':
            incrementCount()
            TodoStore.emitChange()
            break;

        case 'DECLINE':
            declineCount()
            TodoStore.emitChange()
            break;
    }
})