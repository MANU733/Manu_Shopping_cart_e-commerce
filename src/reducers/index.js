import { combineReducers } from 'redux';
import productListReducer from './productList';

export default combineReducers({
    productList: productListReducer,
});