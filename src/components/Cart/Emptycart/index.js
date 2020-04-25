import React from 'react';
import { Paper } from '@material-ui/core';

const Emptycart =()=>{
return(
    <Paper elevation={3} className="emptycartoutline" data-test="Empty-cart">
        <p className="emptycart"><span>YOUR CART IS EMPTY</span> </p>
    </Paper>
)
}

export default Emptycart;