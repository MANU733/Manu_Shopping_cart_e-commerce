import Home from '../container/fetchProduct.js';
import Cart from '../container/cart.js';
import Checkout from './Checkout';

export default [
    {
        exact: true,
        path:'/',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/checkout',
        component:Checkout
    }
]