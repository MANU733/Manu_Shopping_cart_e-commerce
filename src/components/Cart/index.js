import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OrderSummary from '../Cart/Ordersummary/index.js';
import Breadcrumbs from '../../customcomponent/BreadCrumbs';
import Emptycart from './Emptycart'
const Cart = (props) => {
    console.log(props.productList.addtocartitems, 'cart')
    const [showdetails, setshowdetails] = React.useState(false);
    const [statequantity, setincrement] = React.useState(1);
    const [initial,setinitial]=React.useState(props.productList.addtocartitems)


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
    const handleQuantityChange=(e,id)=>{

        const index=initial.findIndex((v)=>v.id===id);
        const copy=Object.assign({},initial[index])
        copy.productPrice=copy.productPrice*e.target.value;
        const original=Object.assign([],initial)
        original[index]=copy;
        setinitial(original)
        setincrement(e.target.value)
    }


    const showdetailsupdated = showdetails ? "show" : "hidden";
    const total= initial.map(v=>v.productPrice);
    const grandtotal=total.reduce((initvalue,eachelement)=>initvalue+eachelement,0);


  console.log(initial,'initial')


    return (
        <div className="cartOuterDivision">
            <Breadcrumbs />
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12} >
                    
                    {initial.length === 0 ? <Emptycart /> :
                        initial.map((v)=> {
                            
                            const [image, productName, productPrice, productdetails,id] = [v.image, v.productName, v.productPrice, v.productdetails,v.id];
                            const price = (productPrice * statequantity);
                          ;
                           
                          console.log(id,'keys')
                            return (
                                <>
                                    <Paper elevation={3} className="marginbottom">
                                        <div className="cartproductname">{productName}</div>
                                        <div className="outerDivisionImage">
                                            <img src={image} className='imageSize' />
                                            <span className="cartQuantity">
                                                Quantity:
                                                <input 
                                                type="text" 
                                                defaultValue={statequantity}
                                                onChange={(e)=>handleQuantityChange(e,id)}
                                                />
                                                {/* Quantity:<button onClick={() => increment()}>+</button>{statequantity}<button onClick={() => decrement()}>-</button> */}
                                            </span>
                                            <span className="cartPrice">Price:{productPrice }</span>
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
                    <OrderSummary  grandtotal={Math.floor(grandtotal)}  label="PROCEED TO CHECKOUT"/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cart;

