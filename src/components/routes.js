import Home from '../container/fetchProduct.js';
import Cart from '../container/cart.js';
import Checkout from './Checkout';
import OrderConfirmation from './orderConfirmation';
import Signin from '../container/signin';
import Signup from '../container/signup';
import Logout from '../container/logout';

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
    },
    {
        path:'/orderconfirmation',
        component:OrderConfirmation
    },
    {
        path:'/signin',
        component:Signin
    },
    {
        path:'/signup',
        component:Signup
    },
    {
        path:'/logout',
        component:Logout
    }
]