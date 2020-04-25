import * as actionType from './actionType.js';
import axios from 'axios';

export const signin=(idToken,email)=>{
    return{
        type:actionType.SIGNIN,
        payload:{idToken:idToken,email:email}
    }
    
}
export const logout=()=>{
    return {
        type:actionType.LOGOUT
    }
}

export const signinError=(err)=>{
    console.log("errrr",err)
    return{
        type:actionType.SIGNINERROR,
        payload:err
    }
    
}

export const startsignin=(email,password)=>{

    console.log(email,password,'opo')
    const signindata={
        email:email,
        password:password,
        returnSecureToken:true
    }
    
    return (dispatch)=>{
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5Vs6oMWr2m1mnH6mlTFl94tZiPMDUtUc',signindata)
        .then(res=>dispatch(signin(res.data.idToken,res.data.email)))
        .catch(error=>dispatch(signinError(error.response.data.error.message)));
    }
}