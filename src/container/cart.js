import { connect } from 'react-redux';
import { addtocart, actionproductList} from '../action/fetchproduct.js';
import Cart from '../components/Cart/index.js';

const mapStateToProps = state => ({
    productList: state.productList,
 
});
const mapsDispatchToProps = dispatch => ({
    addtocart:()=>dispatch(addtocart()),
    actionproductList:()=>dispatch(actionproductList()),
});



export default connect(mapStateToProps,mapsDispatchToProps)(Cart);