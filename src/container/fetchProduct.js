import { connect } from 'react-redux';
import { actionproductList,addtocart,startsignin } from '../action/fetchproduct.js';
import Home from '../components/Home/index.js'

const mapStateToProps = state => ({
    productList: state.productList.productList,
    cartitems: state.productList.addtocartitems,
    addtocart:state.productList.addtocart,
    addedtocart:state.productList.addedtocart,
    signinidToken:state.productList.signinidToken,
    signinusername:state.productList.signedinusername
 
});

const mapsDispatchToProps = dispatch => ({
    actionproductList:()=>dispatch(actionproductList()),
    addtocart:(ProductList)=>dispatch(addtocart(ProductList)),
    startsignin:(email,password)=>dispatch(startsignin(email,password))
});

export default connect(mapStateToProps, mapsDispatchToProps)(Home);