import './App.css';
import Home  from './components/Home'
import About  from './components/About'
import Contact  from './components/Contact'
import NavBar  from './components/TopBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route,Link, Redirect} from 'react-router-dom';



function Routes() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  );
}

export default Routes;
