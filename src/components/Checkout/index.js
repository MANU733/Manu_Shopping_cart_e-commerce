import React from 'react';
import Breadcrumbs from '../../customcomponent/BreadCrumbs';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { InputBase } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Link } from 'react-router-dom';

const Checkout = (props) => {

    const [addressAdded, setAddress] = React.useState(false);
    const [addressName, setaddressName] = React.useState('');
    const [addressPhno, setaddressPhno] = React.useState('');
    const [addressArea, setaddressArea] = React.useState('');
    const [errorname, setErrorname] = React.useState("");
    const [errorphno, setErrorphno] = React.useState("");
    const [addresserror, setddresserror] = React.useState("");

console.log(props.location.query.grandtotal,'checkout')
    const editaddress = () => {
        setAddress(false)
    }
    const textareainput = (e) => {
        setaddressArea(e.target.value)
    }
    const handleChangeinputName = (e) => {
        setaddressName(e.target.value)
    }

    const handleChangeinputphnumber = (e) => {
        setaddressPhno(e.target.value)
    }

    const handlesubmit = (e) => {
        e.preventDefault();

        if (addressName === "" || addressName.match(/^[0-9]*$/)) {

            setErrorname("Please Enter the Name ");
        }
        else if (addressPhno === "" || addressPhno.match(/^[A-Za-z]+$/)) {
            setErrorphno("Please Enter Phnumber");
            setErrorname("")
        }
        else if (addressArea === "") {
            setErrorphno('')
            setddresserror("Please Enter Address")

        }
        else {
            setAddress(true)
            setErrorphno('')
            setErrorname("")
            setddresserror("")
        }

    }
    return (<>
        <Breadcrumbs />
        <Grid container>
            <Grid item xs={6}>
                <Paper className="papercheckout">
                    
                    {
                        addressAdded ? (<div className="addressAddedForm">
                            <h6 className="shippingaddress">Shipping Address</h6>
                            <p>Name:{addressName}</p>

                            <p>Phno:{addressPhno}</p>

                            <p>Address:{addressArea}</p>
                            <p onClick={editaddress} className="buttonEdit">Edit</p>
                        </div>)
                            :
                            (<><h5 className="entershippingaddress">Enter Shipping Address</h5>
                            <form onSubmit={(e) => handlesubmit(e)}>
                                <InputBase
                                    placeholder="Enter Name"
                                    className="inputbasename"
                                    defaultValue={addressName}
                                    onChange={(e) => handleChangeinputName(e)}
                                />
                                <p className="erroraddress">{errorname}</p>
                                <InputBase
                                    placeholder="Enter Phone Number"
                                    className="inputbasename"
                                    defaultValue={addressPhno}
                                    onChange={(e) => handleChangeinputphnumber(e)}
                                />
                                <p className="erroraddress">{errorphno}</p>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    rowsMin={3}
                                    className="inputbasename"
                                    placeholder="Address"
                                    defaultValue={addressArea}
                                    onChange={(e) => textareainput(e)}
                                />
                                <p className="erroraddress">{addresserror}</p>;
                    <button type="submit" className="addAdressButton">Add Address</button>
                            </form></>)
                    }

                </Paper>
            </Grid>
           
            <Grid item xs={6}>
            <Paper className="checkoutpaperright">
                <p>Order Total: {Math.floor(props.location.query.total.total)}</p> 
                </Paper>
                <Link to={{ pathname: '/orderconfirmation', query: { Name:{addressName},total:props.location.query.total.total} }} className="completePurchase">Complete Purchase</Link>
            </Grid>  
        </Grid>
    </>)


}
export default Checkout;