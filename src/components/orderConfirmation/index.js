import React from 'react';
import BreadCrumbs from '../../customcomponent/BreadCrumbs';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const OrderConfirmation =(props)=>{
    return (
        <>
        <BreadCrumbs/>
        <Paper className="checkoutpaperright">
        <div>{`Thank you for order ${props.location.query.Name.addressName}`}</div></Paper>
        <Paper className="checkoutpaperright">
        <p>Order Total:{props.location.query.total}</p>
        </Paper>
        
        </>
    )
}
export default OrderConfirmation;