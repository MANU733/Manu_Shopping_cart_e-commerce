import { connect } from 'react-redux';
import Header from '../components/Header'

const mapStateToProps = state => ({
    cartitems: state.productList.addtocartitems
});

export default connect(mapStateToProps)(Header);