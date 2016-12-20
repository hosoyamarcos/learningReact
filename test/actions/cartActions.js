import {expect} from 'chai'
import {addToCart} from '../../app/actions'

describe('actions Add to Cart', () => {
    it('will return an action type', () => {
        expect(addToCart(22).type).to.eql('ADD_TO_CART')
    })

    it('will retrun an object with payload', () => {
        expect(addToCart(22).payload).to.eql(22)
    })
})