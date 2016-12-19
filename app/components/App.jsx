import React, {Component} from 'react'

import Products from '../containers/products.jsx'
import ShoppingCart from '../containers/shoppingCart.jsx'

class App extends Component {
    render(){
        return (
            <div>
                <p>Hello</p>
                <h2>My store is working</h2>
                <Products/>
                <h5>My cart</h5>
                <ShoppingCart/>
            </div>
        )
    }
}

export default App