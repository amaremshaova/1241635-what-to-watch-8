import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const dataFilm = {
  NAME_FILM : 'The Grand Budapest Hotel',
  GENRE_FILM: 'Drama',
  YEAR_FILM : 2014,

};

ReactDOM.render(
  <React.StrictMode>
    <App nameFilm = {dataFilm.NAME_FILM} genreFilm = {dataFilm.GENRE_FILM} yearFilm={dataFilm.YEAR_FILM}/>
  </React.StrictMode>,
  document.getElementById('root'));
