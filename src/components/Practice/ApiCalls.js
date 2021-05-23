import React from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



/* https://www.cricapi.com/how-to-use.aspx */

// https://cricapi.com/api/playerFinder
// http://cricapi.com/api/playerStats?pid=35320




const ApiCalls =()=> {
    const [seachPlayer, setSeachPlayer] = React.useState('');
    const [playerName, setplayerName] = React.useState('');
    const [playerID, setPlayerID] = React.useState('');
  
  const fetchConfigApi = async () =>{
    try {

    let request = {
      "apikey": "EGdulQYQ4wfLJVgArpa5gClMWmv1",
      name : seachPlayer
  };

       const result = await Axios.post('https://cricapi.com/api/playerFinder',request)
       console.log("error response",result);
       setplayerName(result.data.data[0].fullName)
       setPlayerID(result.data.data[0].pid)
    } catch (e) {
      console.log("error response", e);
    }  
  }
  
React.useEffect(() => { fetchConfigApi(); }, []);

const classes = useStyles();

const handleChange =(e)=>{
  setSeachPlayer(e.target.value)
  fetchConfigApi()
  console.log(e.target.value)
}
   
return(
  <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <input type = "text" onChange ={(e) => {handleChange(e)}}>
            </input>
            <br/>
            Player Name:
            {playerName} 
            <br/>
            Player ID:
            {playerID}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default ApiCalls;
