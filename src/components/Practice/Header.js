import React from 'react';
import ApiCalls from './ApiCalls';

const Header =(props)=>{
return(
    <div>
    <h1 className = "hearderName">{props.hearderName}</h1>
    <ApiCalls/>
    </div>
)
}

export default Header;