import React from 'react';
import products from './products.json'

const Product = (props) => {
    let {_id} = props.match.params
    const product = products.find(product => product._id === _id)
    let {name, price, description} = product

    return (
        <div>  
            <h1>{name}</h1>
            <h3>Price: ${price}</h3>
            <h3>{description}</h3>
        </div>
    )
}

export default Product;

//tells me it cannot read property name of undefined, referring to the div on line 10