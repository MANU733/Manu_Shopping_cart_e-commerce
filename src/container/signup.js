import { connect } from 'react-redux';
import Signup from '../components/signup';
import {startsignup} from '../action/signup';

const mapStateToProps=(state)=>{
    return {
  errormessage:state.productList.Signuperrormsg,
  idToken:state.productList.idToken
    }
}

const mapsDispatchToProps=dispatch=>{
    return {
        startsignup:(email,password,Name)=>dispatch(startsignup(email,password,Name))
    }
}
export default connect(mapStateToProps, mapsDispatchToProps)(Signup);