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


        console.log(total,'total')
        return (
            <>
            <h4 >Order Summary</h4>
            <Paper elevation={3}>
                <p className="ordersummary">Order total:<span className="rowreverse">{Math.floor(this.props.grandtotal)}</span></p>
        <p className="ordersummary">Discount: 20% off<span className="rowreverse">{Math.floor(discount)}</span></p>
                <p className="ordersummary">Tax: 8% <span className="rowreverse">{Math.floor(tax)}</span></p>
                <p className="ordersummary">Total:<span className="rowreverse">{Math.floor(total)}</span></p>
            </Paper>
            <Paper elevation={3}>
        <Link to={{ pathname: '/checkout', query: { total:{total}} }} className="processedbutton">{this.props.label}</Link></Paper>

            
            </>
        )
    }
}
export default Ordersummary;