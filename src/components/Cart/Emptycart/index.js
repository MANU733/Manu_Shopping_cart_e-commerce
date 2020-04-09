import React from 'react';
import { Paper } from '@material-ui/core';

const Emptycart =()=>{
return(
    <Paper elevation={3} className="emptycartoutline">
        <p className="emptycart"> YOUR CART IS EMPTY</p>
    </Paper>
)
}

export default Emptycart;