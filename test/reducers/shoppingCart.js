import {expect} from 'chai'
import shoppingCart from '../../app/reducer/shoppingCart.js'

let id = {id:22}

describe('shoppingCart reducer', () => {
    it('can add new prods', () => {
        expect(
            shoppingCart([], {type: "ADD_TO_CART", payload: id})
        ).to.eql([22])
    })

    it('can remove prods', () => {
        let id = {id:22}
        let state = shoppingCart([], {type: "ADD_TO_CART", payload: id})
        expect(
            shoppingCart(state, {type: "REMOVE_FROM_CART", payload: id})
        ).to.eql([])
    })
})