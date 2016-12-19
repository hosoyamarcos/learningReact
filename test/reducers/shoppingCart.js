import {expect} from 'chai'
import shoppingCart from '../../app/reducer/shoppingCart.js'

let id = {id:22}

describe('shoppingCart reducer', () => {
    it('can add new prods', () => {
        expect(
            shoppingCart([], {type: "ADD_TO_CART", payload: id})
        ).to.eql([22])
    })
})