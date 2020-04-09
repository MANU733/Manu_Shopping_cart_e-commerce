import React from 'react';
import Grid from '@material-ui/core/Grid';

const Footer=()=>
( 
    <Grid container spacing={0}>
        <Grid item xs={12}>
        <div className='footerouterdiv'> 
        <span className='copyright'>copyrights@2020</span>
    </div>
        </Grid>
    </Grid>
   
)

export default Footer;