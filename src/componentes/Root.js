import React,{Component}  from "react";
import RouterComponent from './Router'

class Root extends Component {
    render(){
//this.props.buildings.map(this.renderBuildings.bind(this))
// console.log(this.props.people.map((this.props.getPeople.bind(this)))
const people = this.props.people
console.log(people);



        return(
       <div>
           <RouterComponent  people={people}  />
       </div>
        )
    }
}
export default Root