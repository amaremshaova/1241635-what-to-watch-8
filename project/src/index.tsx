import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const filmData = {
  nameFilm: 'The Grand Budapest Hotel',
  genreFilm: 'Drama',
  yearFilm: 2014,

};

ReactDOM.render(
  <React.StrictMode>
    <App name = {filmData.nameFilm} genre = {filmData.genreFilm} year = {filmData.yearFilm}/>
  </React.StrictMode>,
  document.getElementById('root'));
