import { connect } from 'react-redux';
import { actionproductList,addtocart } from '../action/fetchproduct.js';
import Home from '../components/Home/index.js'

const mapStateToProps = state => ({
    productList: state.productList.productList,
    cartitems: state.productList.addtocartitems,
    addtocart:state.productList.addtocart,
    addedtocart:state.productList.addedtocart
 
});

const mapsDispatchToProps = dispatch => ({
    actionproductList:()=>dispatch(actionproductList()),
    addtocart:(ProductList)=>dispatch(addtocart(ProductList))
});

export default connect(mapStateToProps, mapsDispatchToProps)(Home);