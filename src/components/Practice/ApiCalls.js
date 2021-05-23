import React from 'react';
import Axios from 'axios';

let request = {
    "apikey": "EGdulQYQ4wfLJVgArpa5gClMWmv1"
};
/* https://www.cricapi.com/how-to-use.aspx */


const ApiCalls =()=> {
    const [showdetails, setshowdetails] = React.useState('EMPTY');
    React.useEffect(() => {
        Axios.post(' https://cricapi.com/api/matches/',request)
        .then(response =>setshowdetails(response.data.creditsLeft))
    }, [])
return(
  <div>
{showdetails}
  </div>  
)
};
export default ApiCalls;
