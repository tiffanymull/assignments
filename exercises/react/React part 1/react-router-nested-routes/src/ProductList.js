import React from 'react';
import{Link, Switch, Route} from 'react-router-dom';

import list from './products.json';
import Product from './Product'

const ProductList = () => {
    
    const productsMapped = list.map(product => <Link key={product._id} to={`/products/${product._id}`}>{product.name}</Link>)
    
    return (
       <React.Fragment>
       <div>
            <h1>This is Products List</h1>
        </div>

        <div>
            {productsMapped}
        </div>

            <Switch>
                <Route path="/products/:_id" component={Product} />
            </Switch>

           </React.Fragment>
           
            
    )   
}

export default ProductList