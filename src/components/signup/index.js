import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { InputBase } from '@material-ui/core';



const Signup = (props) => {
    const [email, setemail] = React.useState("");
    const [password, setpassword] = React.useState("");
    const [Name, setname] = React.useState("");
    const [Nameerror, setNameerror] = React.useState("");

    const emailonchange = (e) => {
        setemail(e.target.value)
    }

    const passwordonchange = (e) => {
        setpassword(e.target.value)
    }

    const onsubmitsignup = (e) => {
        e.preventDefault()
        if(Name==='')
        {
           setNameerror('Please Enter Name')
        }
        else{
        props.startsignup(email, password, Name)
        }
    }

    const NameOnchange = (e) => {
        setname(e.target.value)
    }

    let content=null;

    if(props.idToken)
    {
        content=(<Paper elevation={3} className="signinpaper">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAWlBMVEX///9BrUkuqDgzqT05q0LF48e53bu/4ME8q0T3+/eWzZmJyI1Psla8375Ts1rx+PFqu3AmpjGQy5Tm8+dguGZatmGx2rTe79/L5s0apCiq1q1Hr091wHplumtWL/7AAAACyklEQVR4nO2b6VbCQAyFCa3aAaTQgqjI+7+mLV3oMksGkokc5/62nO/k3mRsBhaLqKioqKioP6FPaYBF8fUqTLBewl6WoSIA2H8IEqxqAoBEjqFoCEDOi3VHIMZQ3AgAlt8CBKshgUgeijGBgBfrKUHw3pzVIHgeVjqCiiFcHbQ1CJoHTQ56hjBeGGtQKwnBYCUI4oXFhUAMTgL23jR04yQPnL3pyEGH8M5HgHChNuKNjwBXg+ULHwEqB5DI14CxJZE5YHThaXIg343yBDEHkMh3o/xEEneBswYxB8+Tg3g6+7igvAmoc1AeSk8C6tO5hOTsx0B9Op/OGWSpDwO1C6dtWv195lEH5FRGE+SQXp9IN1gG6qlcQtY+kwKOgXoqnzZZ/xQuD+TduEkHz2HyQD2Vc8hGT7rzQD2VywlBxeDwgnoqD3PQKbNmkrobxzno62DxgnoqT3PQMxgzSZ2Dk4Gg8iLRM5DnYKtzoWXQ1oE8B2czgT4PfFPZwDDrC/KpfLYTzPNAPpUtOegZRnmgzsHiB/OBwzzQvzOpQ4JhyDoGjg1GvsMwdGc3uQsNw8Gdhm5Ocr0zqQ3KiyoPfO9M6oLyAjg3Wbg8AMawu9+d8yPq4xG6f6Optqg6OPXIRlPhvHARPLTByFGZ5CSovXg0D49vsnCz2lIDgi0OsjdNBCSbLNys1ish2qUp7f/yqBqQbbJws1pDQLhPvC8PtBvNe2Y19UbTf1bTbzR988CxV/bLA89mW3nkget+QR2xdeC7b8R6wXm/gDu7OQlws5rznunK4Dy7Oe+ZGrnywOtCy2A9uznvmW6yvWdx3jONGIx9EcKFRqY8hCMwnd2c3wKZSzerOb8FomWYeRHShUbTWR2eYPqexT2VDQyDPPBPZb1uvSnhQstwabwIM5X1as7usPNgxlD1hZwLjfLdXvxnT7lwDaKioqKi/p1+ATbZJIF2LCH3AAAAAElFTkSuQmCC"/>
            <h2>Account created</h2>
            <h5>Start Sign in</h5>
            <Link to="/signin">Sign In</Link>
        </Paper>);
    }
    else{
        content=(
            <Grid container spacing={0}>
            <Grid item xs={12}>
                <Paper elevation={3} className="signinpaper">
                    <p className="errmsgcolor">{props.errormessage || Nameerror}</p>
                    <form onSubmit={onsubmitsignup}>
                    <InputBase
                            placeholder="Enter Name"
                            className="inputbasename1"
                            onChange={(e) => NameOnchange(e)}
                        />
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
                        <button type="submit" className="buttondisplayflex">signup</button>
                    </form>
                    <h3>if you already having account, Please sign in</h3>
                    <Link to="/signin">Sign In</Link>
                </Paper>

            </Grid>
        </Grid>
        )
    }
    return content;
}

export default Signup;

