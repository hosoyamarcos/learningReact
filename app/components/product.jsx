import React from 'react'

let Product = ({id, name, price, handleClick}) => (
    <div>
        {name} ${price} <button onClick={() => {handleClick(id)} } >Add to cart</button>
    </div>
)

export default Product