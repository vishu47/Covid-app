import './App.css';
import React,{useEffect, useState} from 'react'
import Home  from './components/Home'
import About  from './components/About'
import Contact  from './components/Contact'
import NavBar  from './components/TopBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route,Link, Redirect} from 'react-router-dom';




function Routes() {

  const [data , setData] = useState();
  const [loading , setLoading] = useState(false);

  useEffect(() => {
      const fetcApi = async () => {
          // const url = `https://api.covid19india.org/state_district_wise.json`;
          const url = `https://api.rootnet.in/covid19-in/stats/latest`;
          const res = await fetch(url);
          const response = await  res.json(); 
          setData(response.data);
          setLoading(true);
          console.log(response.data);
      }
      fetcApi();
  }, []);
  return (
    <div className="">
      <NavBar></NavBar>
      <Switch >
        <Route exact path="/"> <Home data = {data} /> </Route>   
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
}

export default Routes;
