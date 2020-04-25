import { connect } from 'react-redux';
import {logout} from '../action/signin';
import Logout from '../components/logout';

const mapStateToProps=(state)=>{
    return {

    }
}

const mapsDispatchToProps=dispatch=>{
    return {
        logout:()=>dispatch(logout())
    }
}
export default connect(mapStateToProps, mapsDispatchToProps)(Logout);