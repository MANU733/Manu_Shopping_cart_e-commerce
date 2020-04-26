import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { InputBase } from '@material-ui/core';



const Signin = (props) => {
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");

    console.log(props.signinidToken, 'opo')

    const emailonchange = (e) => {
        setemail(e.target.value)
    }

    const passwordonchange = (e) => {
        setpassword(e.target.value)
    }

    const onsubmitsignup = (e) => {
        e.preventDefault()
        props.startsignin(email, password);
    }
    let auth = null;
    if (props.signinidToken !== null) {
        auth = <Redirect to='/' />
    }
    else {
        auth = (
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    {auth}
                    
                    <Paper elevation={3} className="signinpaper">
                    <p className="errmsgcolor">{props.errormessage}</p>
                    <form onSubmit={onsubmitsignup}>
                        <InputBase
                            placeholder="Enter email id"
                            className="inputbasename1"
                            onChange={(e) => emailonchange(e)}
                        />
                        <InputBase
                            placeholder="Enter Password"
                            className="inputbasename1"
                            onChange={(e) => passwordonchange(e)}
                        />
                        <button type="submit" className="buttondisplayflex">signin</button>
                    </form>
                    <h3>If you don't have account, please Sign up</h3>
                    <Link to="/signup">Sign up</Link>
                    </Paper>
                   
                </Grid>
            </Grid>
        )
    }

    return auth;



}

export default Signin;