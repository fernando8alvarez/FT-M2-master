import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from '../../actions/index.js'
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
         {this.props.movies?.map(movie => { return <div key={movie.imdbID}>
          <Link to={`/movie/${movie.imdbID}`}>
            <li>{movie.Title}</li>
          </Link>
          <button onClick={()=> this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>agregar a favoritos</button>
         </div>})}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {//toma el estado redux
  return {
    movies: state.moviesLoaded//envia esta propiedad al componente
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),//envia este despacho al componente como prop
    getMovies: title => dispatch(getMovies(title))//envia este despacho al componente como prop
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);
