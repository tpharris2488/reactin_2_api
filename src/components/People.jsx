import React, { Component } from "react";
import PeopleCard from "./PeopleCard";
import FilmCard from "./FilmCard";
import Film from "./Film";
import "isomorphic-fetch";
import "es6-promise";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = { people: [], loaded: true };
  }


  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
    .then(resp => resp.json())
    .then(people => {
        this.setState({ people })
    });
}

handleClick = () => {
  this.setState({ loaded: !this.state.loaded });
};

render() {
  if (this.state.loaded === true) {
    return (
      <div className='d-flex flex-column'>
      <img
        src="https://ghibliapi.herokuapp.com/images/logo.svg"
        alt="Created by"
      />
      <button className='w-25' value={this.state.loaded} onClick={this.handleClick}>
        Load Films
      </button>
      {this.state.people.map(people => <PeopleCard key={People.id} value={people} />)}
    </div>
     
    );
  } else {
    return (
    <div>
        <Film />
  </div>
    )
  }
  } 
};
export default People;