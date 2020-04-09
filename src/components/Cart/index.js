import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OrderSummary from '../Cart/Ordersummary/index.js';
import Breadcrumbs from '../../customcomponent/BreadCrumbs';
import Emptycart from './Emptycart'
const Cart = (props) => {
    console.log(props.productList.addtocartitems, 'cart')
    const [showdetails, setshowdetails] = React.useState(false);
    const [statequantity, setincrement] = React.useState(1);

    const increment = () => {

        setincrement(statequantity + 1);
    }
    const decrement = () => {
        setincrement(statequantity - 1);
    }

    const toggleShow = () => {
        setshowdetails(true)
    }
    const toogleclose = () => {
        setshowdetails(false)
    }

    const showdetailsupdated = showdetails ? "show" : "hidden";
    const total= props.productList.addtocartitems.map(v=>v.productPrice*statequantity);
    const grandtotal=total.reduce((initvalue,eachelement)=>initvalue+eachelement,0);

  


    return (
        <div className="cartOuterDivision">
            <Breadcrumbs />
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12} >
                    
                    {props.productList.addtocartitems.length === 0 ? <Emptycart /> :
                        props.productList.addtocartitems.map(v => {
                            
                            const [image, productName, productPrice, productdetails] = [v.image, v.productName, v.productPrice, v.productdetails];
                            const price = (productPrice * statequantity);
                           
                          
                            return (
                                <>
                                    <Paper elevation={3} className="marginbottom">
                                        <div className="cartproductname">{productName}</div>
                                        <div className="outerDivisionImage">
                                            <img src={image} className='imageSize' />
                                            <span className="cartQuantity">
                                                Quantity:<button onClick={() => increment()}>+</button>{statequantity}<button onClick={() => decrement()}>-</button>
                                            </span>
                                            <span className="cartPrice">Price:{productPrice * statequantity}</span>
                          
                                        </div>
                                        <Paper elevation={3} className="productdetailsoutline">
                                            <div onClick={() => toggleShow()}>Product Details</div>
                                            <div className={showdetailsupdated}>{productdetails}
                                                <span onClick={() => toogleclose()}>close</span></div>
                                        </Paper>
                                    </Paper></>
                            )
                        }
                        )
                    }
                </Grid>
                <Grid item sm={4} xs={12}>
                    <OrderSummary  grandtotal={grandtotal}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cart;

