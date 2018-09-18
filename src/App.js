import React, { Component } from 'react';
import './css/App.css';
import Root from './componentes/Root'
// import People from './componentes/People/People'
// import Films from './componentes/Films/Films'
import axios from 'axios';



class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      people:[],
    }
    this.getPeople = this.getPeople.bind(this)
  }

  getPeople(){
    return axios.get("https://swapi.co/api/people").then((response) => {
        // console.log(response.data.results);
        this.setState({people: response.data.results})
    })
    

  }
  getFilms(){
    return axios.get("https://swapi.co/api/films").then((response) => {
        // console.log(response.data.results);
        this.setState({films: response.data.results})
    })
  }
    componentDidMount(){
      this.getPeople()
      this.getFilms()
    }
  render() {
    const {people} = this.state

    return (
      <div className="App">
        <div className="Root">
           <Root people={people} /   >
        </div>
       
      </div>
    );
  }
}

export default App;
