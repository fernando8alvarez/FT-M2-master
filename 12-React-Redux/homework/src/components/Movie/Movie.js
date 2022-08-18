import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';

//para acceder al id de la peli debemos acceder al objeto macth que esta en las props del componente
//this.props.match.params.id  ---> aqui accedemos al id de la pelicula

class Movie extends React.Component {

componentDidMount(){
    this.props.getMovieDetail(this.props.match.params.id)
}
    render() {
        return (
            <div className="movie-detail">
                <h2>{this.props.movie.Title}</h2>
                <p>
                    <img src={this.props.movie.Poster} alt="not found" />
                    <ul>
                        <li>{`Año: ${this.props.movie.Year}`}</li>
                        <li>{`Genero: ${this.props.movie.Genre}`}</li>
                        <li>{`Director: ${this.props.movie.Director}`}</li>
                        <li>{`Descripcion: ${this.props.movie.Plot}`}</li>
                    </ul>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movie: state.movieDetail
    }
}

export default connect(mapStateToProps, {getMovieDetail})(Movie);