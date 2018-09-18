import React,{Component}  from "react";

class People extends Component {
    render(){
        let people = this.props.peple;
        return(
       <div>
           <h1>People </h1>
                {/* {
                people.map((p)=> {
                console.log(p,"benis")})
                } */}
       </div>
        )
    }
}
export default People