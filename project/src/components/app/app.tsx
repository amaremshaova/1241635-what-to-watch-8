import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  nameFilm: string,
  genreFilm: string,
  yearFilm: number;
}

function App({nameFilm, genreFilm, yearFilm} : AppScreenProps): JSX.Element {
  return (<MainScreen nameFilm={nameFilm} genreFilm={genreFilm} yearFilm={yearFilm}/>);
}

export default App;
