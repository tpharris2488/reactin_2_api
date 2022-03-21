import React, { Component } from "react";
import FilmCard from "./FilmCard";
import PeopleCard from "./PeopleCard";
import People from "./People";
import "isomorphic-fetch";
import "es6-promise";
import People from "./People";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = { films: [], loaded: true };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(result => result.json())
      .then(films => {
        this.setState({ films });
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
          Load People
        </button>
            {this.state.films.map(film => <FilmCard key={film.id} value={film} />)}
          </div>
       
      );
    } else {
      return (
      <div>
            <People />
    </div>
      );
    }
    } 
  };


export default Film;