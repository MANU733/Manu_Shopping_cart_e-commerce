import React from 'react';
import routes from './components/routes.js';
import Header from '../src/container/app.js';
import '../src/App.css';
import Footer from './components/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const  App=(props) =>{
  console.log(props,'app')
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Switch>
        {
          routes.map(route => (
            <Route {...route} key={Math.random()} />
          ))
        }
      </Switch>
    </BrowserRouter>
    {/* <Footer/> */}
</>
  );
}

export default App;
