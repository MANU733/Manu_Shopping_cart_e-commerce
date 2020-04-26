import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
class Ordersummary extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const discount = (20 / 100) * this.props.grandtotal;
        const tax = (8 / 100) * this.props.grandtotal;
        const total = (this.props.grandtotal - discount) + tax;

const disablelink=total===0?(<s>{this.props.label}</s>):this.props.label;
const disableCursor=total===0?"processedbuttondisable":"processedbutton";
        console.log(total,'total')
        return (
            <p className="test">
            <h4 >Order Summary</h4>
            <Paper elevation={3} className="mb_30">
                <p className="ordersummary">Order total:<span className="rowreverse">{Math.floor(this.props.grandtotal)}</span></p>
        <p className="ordersummary">Discount: 20% off<span className="rowreverse">{Math.floor(discount)}</span></p>
                <p className="ordersummary">Tax: 8% <span className="rowreverse">{Math.floor(tax)}</span></p>
                <p className="ordersummary">Total:<span className="rowreverse">{Math.floor(total)}</span></p>
            </Paper>
            
        <Link to={{ pathname: '/checkout',
         query: { total:{total}} }} className={disableCursor}>{disablelink}</Link>

            
            </p>
        )
    }
}
export default Ordersummary;