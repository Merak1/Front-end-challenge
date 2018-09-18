import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React,{Component}  from "react";


import Films from './Films/Films';
import People from './People/People';
import Planets from './Unnavailable/Planets';
import Species from './Unnavailable/Species';
import Starships from './Unnavailable/Starships';
import Vehicles from './Unnavailable/Vehicles';


  
  class RouterComponent extends Component{
    render() {
      const people = this.props.people
      const Routing = () => (
  
    <Router>
      <div>
        <ul>
          
          <li className="nav-links">
            <Link to="/Films">Films</Link>
          </li>
          <li className="nav-links">
            <Link to="/People">People</Link>
          </li>
          <li className="nav-links">
            <Link to="/Planets">Planets</Link>
          </li>
          <li className="nav-links">
            <Link to="/Species">Species</Link>
          </li>
          <li className="nav-links">
            <Link to="/Starships">Starships</Link>
          </li>
          <li className="nav-links">
            <Link to="/Vehicles">Vehicles</Link>
          </li>
          
        </ul>
  
        <Route path="/Films" component={Films} />
        <Route path="/People" component={People} />
        <Route path="/Planets" component={Planets} />
        <Route path="/Species" component={Species} />
        <Route path="/Starships" component={Starships} />
        <Route path="/Vehicles" component={Vehicles} />

      </div>
    </Router>
  );
      return (
        <div>
          <h1>benis</h1>
          <div>
          {Routing}
          </div>
        </div>
      );
    }
  }
  


  
  // export default Routing ;
  export default RouterComponent;
    
  