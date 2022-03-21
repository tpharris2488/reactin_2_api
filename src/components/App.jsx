import React, { Component } from "react";
import Film from "./Film";
import People from "./People";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loaded: null 
    };
  }

  handleClick = () => {
    this.setState({ loaded: true });
  };

  handleClick2 = () => {
    this.setState({ loaded: false });
  };
  



  render() {
        let switchCards;
        switch(this.state.loaded) {
          case true:
            return(
              switchCards = <Film />)
              break;
          case false:
            return(
              switchCards = <People />)
              break;
          default:
            return (
              <div className='d-flex flex-column'>
                <img
        src="https://ghibliapi.herokuapp.com/images/logo.svg"
        alt="Created by"/><br />
              <button className='w-25' onClick={() => this.handleClick()}>Load Films</button><br />
              <button className='w-25' onClick={() => this.handleClick2()}>Load People</button></div>)
      }


   
      
    }
  };


export default App;
