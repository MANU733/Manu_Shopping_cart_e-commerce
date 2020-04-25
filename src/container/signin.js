import { connect } from 'react-redux';
import Signin from '../components/signin';
import {startsignin} from '../action/signin';

const mapStateToProps=(state)=>{
    return {
  errormessage:state.productList.Signinerrormsg,
  signinidToken:state.productList.signinidToken,
 
    }
}

const mapsDispatchToProps=dispatch=>{
    return {
        startsignin:(email,password)=>dispatch(startsignin(email,password))
    }
}
export default connect(mapStateToProps, mapsDispatchToProps)(Signin);