import {combineReducers} from 'redux'
import products from './products.js'
import shoppingCart from './shoppingCart.js'

let reducer = combineReducers({products, shoppingCart})

export default reducer
