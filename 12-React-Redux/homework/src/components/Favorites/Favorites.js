import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from '../../actions/index.js'
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {this.props.movies && this.props.movies.map(movie =>  <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <li>{movie.title}</li>
            </Link>
            <button onClick={()=> this.props.removeMovieFavorite(movie.id)}>X</button>
          </div>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    movies: state.moviesFavourites
  }
}


export default connect(mapStateToProps,{removeMovieFavorite})(ConnectedList);
