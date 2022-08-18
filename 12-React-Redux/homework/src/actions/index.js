import axios from 'axios';

const apikey = '26b9af49';
const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';


//Action creator 1 (funcion normal):
export function addMovieFavorite(name) {
    return { type: ADD_MOVIE_FAVORITE, payload: name};
  }

//Action creator 2 (arrow function):
export const removeMovieFavorite = (id)=>{
    return {type: REMOVE_MOVIE_FAVORITE, payload: id}
}

//Accion asincronica 1 (funcion normal): este tipo de acciones asincronicas en vez de retornar una action retornan una funcion, y automaticamente redux le permite a esa funcion tomar el "dispatch" como parametro, para despachar la action
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`)//Esta haciendo un reques del tipo get
        .then(response => response.json())// response=La api devuelve un objeto json, response.json()= agarra el json y lo convierte en un objeto js
        .then(objJS => { //Agarramos el objeto js y despachamos una accion
          dispatch({ type: GET_MOVIES, payload: objJS });//Manda a el reducer esta info con el objeto js en el payload
        });
    };
  }

//Action asincronica 2 (arrow function): 
export const getMovieDetail = (id)=> {
    return (dispatch)=>{
        return axios.get(`http://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
        .then((movieDetail) =>{
            return dispatch({type: GET_MOVIE_DETAIL, payload: movieDetail.data})
        }).catch(error => {console.log(error)})
    }
}