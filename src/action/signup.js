import * as actionType from './actionType.js';
import axios from 'axios';

export const signup=(idToken)=>{
    return{
        type:actionType.SIGNUP,
        payload:idToken
    }
    
}

export const signupError=(err)=>{
    return{
        type:actionType.SIGNUPERROR,
        payload:err
    }
    
}

export const startsignup=(email,password,Name)=>{

    console.log(email,password,'opo')
    const signindata={
        email:email,
        password:password,
        returnSecureToken:true
    }
    return (dispatch)=>{
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5Vs6oMWr2m1mnH6mlTFl94tZiPMDUtUc',signindata)
        .then(res=>dispatch(signup(res.data.idToken)))
        .catch(error=>dispatch(signupError(error.response.data.error.message)));
    }
}