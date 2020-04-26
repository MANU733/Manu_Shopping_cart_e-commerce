import { connect } from 'react-redux';
// import { addtocart, actionproductList,startsignin} from '../action/fetchproduct.js';
import OrderConfirmation from '../components/orderConfirmation';

const mapStateToProps = state => ({
    productList: state.productList,
 
});




export default connect(mapStateToProps,null)(OrderConfirmation);