import React from 'react';
import BreadCrumbs from '../../customcomponent/BreadCrumbs';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
const OrderConfirmation = (props) => {


    return (
        <>
            <BreadCrumbs />
            <Grid container>
                <Grid item xs={12}>
                    <Paper className="checkoutpaperright">
                        <div>{`Thank you for order ${props.location.query.Name.addressName}`}</div>
                    </Paper>
                </Grid>
            </Grid>


            <Grid container>
                <Grid item xs={12}>

                    <Paper className="checkoutpaperright">
                        <p>Order Total:{props.location.query.total}</p>
                    </Paper>
                </Grid>
            </Grid>


            <Grid container>
                <Grid item xs={12}>
                    <Paper>
                        <div className="addressAddedForm">
                            <h6 className="shippingaddress">Shipping Address</h6>
                            <p>Name:{props.location.query.Name.addressName}</p>

                            <p>Phno:{props.location.query.phno}</p>

                            <p>Address:{props.location.query.address}</p>
                        </div>
                    </Paper>
                </Grid>
            </Grid>


            <Grid container>
                <Grid item xs={12}>
                    <h3>Order summary</h3>

                    {props.productList.addtocartitems.map(v => {
                        return (
                            <Paper elevation={3} className="marginbottom">
                                <div className="cartproductname">{v.productName}</div>
                                <div className="outerDivisionImage">
                                    <img src={v.image} className='imageSize' />
                                    <span className="cartPrice">Price:{v.productPrice}</span>
                                </div>
                            </Paper>

                        )
                    })


                    }

                </Grid>
            </Grid>


        </>
    )
}
export default OrderConfirmation;